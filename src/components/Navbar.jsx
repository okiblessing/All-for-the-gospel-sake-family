import { useEffect, useState } from 'react';
import BrandMark from './BrandMark';

function Navbar({ navItems, activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [activeSection]);

  return (
    <header className={`site-header ${isScrolled ? 'site-header--solid' : ''}`}>
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#hero" aria-label="Go to homepage hero section">
          <BrandMark />
          <span className="brand-copy">
            <strong>All for the Gospel Sake Family</strong>
            <small>Purpose. Gospel.</small>
          </span>
        </a>

        <button
          type="button"
          className={`nav-toggle ${isOpen ? 'is-open' : ''}`}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${isOpen ? 'nav-links--open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'is-active' : ''}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
