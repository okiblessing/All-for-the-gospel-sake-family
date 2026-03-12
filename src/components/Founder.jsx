import { useState } from 'react';
import Section from './Section';

const founderImage = `${import.meta.env.BASE_URL}founder.jpeg`;

function Founder() {
  const [imageError, setImageError] = useState(false);

  return (
    <Section
      id="founder"
      eyebrow="Founder"
      title="Raised by vision, carried by grace, and built for the Gospel."
      intro="Meet the founder and president of All for the Gospel Sake Family, a young leader whose hunger for God's Word gave birth to a family of faith."
    >
      <div className="founder-panel reveal">
        {/* Add the founder image as /public/founder.jpeg to display it here. */}
        <div className="founder-portrait">
          <div className="portrait-ring" />
          {!imageError ? (
            <img
              className="founder-photo"
              src={founderImage}
              alt="Odia Winner ministering on stage"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="portrait-copy" aria-hidden="true">
              <span>Founder Image</span>
              <strong>Odia Winner</strong>
            </div>
          )}
        </div>

        <div className="founder-content">
          {/* Update the founder name and welcome message here. */}
          <span className="card-eyebrow">Odia Winner | The Youngest Preacher</span>
          <h3>Founder and President of All for the Gospel Sake Family</h3>
          <p>
            Odia Winner, popularly known as the Youngest Preacher, is the
            founder and president of All for the Gospel Sake Family. She is a
            woman after God's own heart, a passionate teacher and preacher, and
            a Holy Spirit-filled young leader with a deep burden to see people
            grow, speak, and walk in purpose.
          </p>
          <p>
            All for the Gospel Sake Family was birthed through a vision in
            early 2022. What began as online meetings with a few friends grew
            into physical gatherings in January 2023, and since then God has
            continued to save lives, transform hearts, and expand this family
            by His grace.
          </p>
          <p>
            Her desire was simple: to see lovers of God gather freely around the
            Word and have room to express the gifts God placed inside them.
            Today, All for the Gospel Sake Family stands as a living testimony
            that God truly fulfills every word He speaks.
          </p>
          <div className="founder-highlights">
            <div>
              <strong>Vision in 2022</strong>
              <span>All for the Gospel Sake Family began through a God-given vision and started with online fellowship.</span>
            </div>
            <div>
              <strong>Physical Meetings Since 2023</strong>
              <span>Physical gatherings began in January 2023 and continue to impact lives in Mosogar.</span>
            </div>
            <div>
              <strong>Born Leader</strong>
              <span>She has served in leadership from childhood across ministry, school, media, drama, and evangelism.</span>
            </div>
            <div>
              <strong>This Is Family</strong>
              <span>Built as more than a fellowship, All for the Gospel Sake Family is a home where people can grow, serve, and burn for God together.</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Founder;
