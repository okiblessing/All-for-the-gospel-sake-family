function Section({ id, eyebrow, title, intro, children }) {
  return (
    <section id={id} data-section className="content-section">
      <div className="container">
        <div className="section-heading reveal">
          <span className="section-eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{intro}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

export default Section;
