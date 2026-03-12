function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-backdrop" aria-hidden="true">
        <div className="hero-sun" />
        <div className="hero-cloud hero-cloud--one" />
        <div className="hero-cloud hero-cloud--two" />
        <div className="hero-path" />
      </div>

      <div className="hero-overlay" />

      <div className="container hero-content reveal is-visible">
        <span className="hero-kicker">A welcoming family for Christ-centered living</span>
        <h1>All for the Gospel Sake Family</h1>
        <p>"Walking in purpose, Growing in faith, sharing the Gospel."</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">
            Join Us
          </a>
          <a className="button button-secondary" href="#about">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
