import BrandMark from './BrandMark';

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4.25a7.75 7.75 0 0 0-6.7 11.65L4 20l4.24-1.26A7.75 7.75 0 1 0 12 4.25Z" />
      <path d="M9.3 8.9c.22-.48.45-.49.66-.5h.57c.14 0 .37.06.56.45.19.39.66 1.53.72 1.64.06.11.1.24.02.39-.08.15-.12.24-.24.36-.12.12-.25.27-.35.36-.12.12-.24.25-.1.49.14.24.63 1.04 1.36 1.69.94.84 1.74 1.1 1.99 1.22.24.12.38.1.52-.06.14-.17.61-.71.77-.95.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.11.06.64-.15 1.26-.21.62-1.23 1.18-1.69 1.25-.43.07-.98.1-1.58-.1-.36-.12-.82-.27-1.41-.53-2.48-1.08-4.09-3.6-4.21-3.77-.12-.17-1.01-1.35-1.01-2.58 0-1.23.64-1.82.87-2.07Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.75 6.5h16.5A1.75 1.75 0 0 1 22 8.25v7.5a1.75 1.75 0 0 1-1.75 1.75H3.75A1.75 1.75 0 0 1 2 15.75v-7.5A1.75 1.75 0 0 1 3.75 6.5Z" />
      <path d="m3 7.5 9 6 9-6" />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-top">
          <div className="footer-brand-panel">
            <div className="brand brand--footer">
              <BrandMark />
              <span className="brand-copy">
                <strong>All for the Gospel Sake Family</strong>
                <small>Living for the sake of the Gospel.</small>
              </span>
            </div>
            <div className="social-row social-row--brand">
              <a href="#contact" aria-label="Instagram placeholder" className="social-icon">
                <InstagramIcon />
              </a>
              <a href="#contact" aria-label="WhatsApp placeholder" className="social-icon">
                <WhatsAppIcon />
              </a>
              <a href="#contact" aria-label="Email placeholder" className="social-icon">
                <MailIcon />
              </a>
            </div>
            <a className="footer-cta" href="#contact">
              Worship With Us
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 All for the Gospel Sake Family. All rights reserved.</p>
          <p>Built as a family, not just a fellowship.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
