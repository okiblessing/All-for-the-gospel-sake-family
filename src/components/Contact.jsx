import { useState } from 'react';
import Section from './Section';

const fellowshipEmail = 'all4dgospelsakefamily@gmail.com';
const contactEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

// Edit these placeholders with your real contact channels.
const contactLinks = [
  {
    label: 'WhatsApp',
    value: 'Join our WhatsApp community',
    href: 'https://chat.whatsapp.com/IOUcAV47R3A7IJWBEHLMQg',
  },
  {
    label: 'Email',
    value: 'Send us an email',
    href: `mailto:${fellowshipEmail}`,
  },
  {
    label: 'Instagram',
    value: 'Follow us on Instagram',
    href: 'https://www.instagram.com/afgf2026?igsh=MTczbG92bjhjbm41Zg==',
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({
    type: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill in your name, email, and message before sending.',
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    if (contactEndpoint) {
      try {
        const response = await fetch(contactEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        });

        if (!response.ok) {
          throw new Error('Unable to send message.');
        }

        setStatus({
          type: 'success',
          message: 'Message sent to All for the Gospel Sake Family successfully.',
        });
        setFormData({ name: '', email: '', message: '' });
      } catch (error) {
        setStatus({
          type: 'error',
          message:
            'There was a problem sending your message online. Please try again or use the direct email link below.',
        });
      } finally {
        setIsSubmitting(false);
      }

      return;
    }

    const subject = encodeURIComponent(`New message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${fellowshipEmail}?subject=${subject}&body=${body}`;

    setStatus({
      type: 'success',
      message:
        'Your mail app is opening so you can send your message directly to All for the Gospel Sake Family.',
    });
    setIsSubmitting(false);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Reach out, connect with the family, and take your next step."
      intro="Messages can be sent directly through the website form service or through your mail app."
    >
      <div className="contact-layout">
        <div className="contact-card reveal">
          <h3>Send a Message</h3>
          {/* Add your form service endpoint in VITE_CONTACT_ENDPOINT to send directly from the website. */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows="5"
                placeholder="Share how we can pray with or support you."
                value={formData.message}
                onChange={handleChange}
              />
            </label>
            {status.message ? (
              <p className={`form-status form-status--${status.type || 'info'}`}>
                {status.message}
              </p>
            ) : null}
            <button type="submit" className="button button-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        <aside className="contact-aside reveal">
          <h3>Connect Directly</h3>
          <p>
            You can also reach All for the Gospel Sake Family directly through WhatsApp, email, or Instagram.
          </p>
          <div className="contact-links">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === 'Email' ? undefined : '_blank'}
                rel={item.label === 'Email' ? undefined : 'noreferrer'}
              >
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </a>
            ))}
          </div>
        </aside>
      </div>
    </Section>
  );
}

export default Contact;
