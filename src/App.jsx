import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import Founder from './components/Founder';
import Meetings from './components/Meetings';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const navigation = [
  { id: 'about', label: 'About' },
  { id: 'founder', label: 'Founder' },
  { id: 'meetings', label: 'Meetings' },
  { id: 'contact', label: 'Contact' },
];

// Edit these cards to update the About section content later.
const aboutCards = [
  {
    eyebrow: 'Our Watch Word',
    title: 'Growing together with care and purpose',
    lines: [
      'Look at your neighbor',
      'Your strength is my priority',
      'I want to see you grow and shine and most importantly I want to see you walk in purpose',
    ],
  },
  {
    eyebrow: 'Our Desire',
    title: "Living and sharing God's dream",
    lines: [
      "To knows God's dream",
      "To do God's dream",
      "To put men together and preach to them about God's dream, so they will do God's dream",
    ],
  },
  {
    eyebrow: 'Our Mission',
    title: 'From ambition to vision',
    lines: [
      'To move men from ambition to vision, to fulfill purpose together, to leave mosogar burning spiritually and leave men behind that will help other men to burn.',
    ],
  },
];

function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observedSections = document.querySelectorAll('[data-section]');

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: 0.2,
      }
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
      }
    );

    observedSections.forEach((section) => sectionObserver.observe(section));
    document
      .querySelectorAll('.reveal')
      .forEach((element) => revealObserver.observe(element));

    return () => {
      observedSections.forEach((section) => sectionObserver.unobserve(section));
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="app-shell">
      <Navbar navItems={navigation} activeSection={activeSection} />
      <main>
        <Hero />

        <Section
          id="about"
          eyebrow="Who We Are"
          title="A Christ-centered family walking together in purpose and faith."
          intro="We gather to grow deeper in God, serve one another, and keep the Gospel at the center of our lives."
        >
          <div className="about-grid">
            {aboutCards.map((card, index) => (
              <article
                className="info-card reveal"
                key={card.eyebrow}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <span className="card-eyebrow">{card.eyebrow}</span>
                <h3>{card.title}</h3>
                <p>
                  {card.lines.map((line, lineIndex) => (
                    <span key={line}>
                      {line}
                      {lineIndex < card.lines.length - 1 ? <br /> : null}
                    </span>
                  ))}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Founder />
        <Meetings />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
