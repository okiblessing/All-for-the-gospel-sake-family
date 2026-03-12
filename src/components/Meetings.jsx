import Section from './Section';

// Edit these placeholder values with your real schedule and location.
const meetingDetails = [
  { label: 'Meeting Day', value: 'Every Friday' },
  { label: 'Prayer meeting', value: 'Every Monday - 8:00 PM' },
  { label: 'Bible study', value: 'Every wednesday - 8:00 PM' },
  {
    label: 'Online Link',
    value: 'Join our WhatsApp meeting',
    href: 'https://chat.whatsapp.com/IOUcAV47R3A7IJWBEHLMQg',
  },
];

function Meetings() {
  return (
    <Section
      id="meetings"
      eyebrow="Meetings"
      title="Gather with us in worship, prayer, fellowship, and the Word."
      intro="All values below are placeholders so they can be updated quickly later."
    >
      <div className="meetings-layout">
        <div className="meetings-card reveal">
          <h3>Weekly Fellowship Moments</h3>
          <p>
            Set aside time to encounter God, build meaningful relationships, and
            be strengthened in your walk of faith.
          </p>
        </div>

        <div className="meeting-list">
          {meetingDetails.map((detail, index) => (
            <article
              className="meeting-item reveal"
              key={detail.label}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span>{detail.label}</span>
              {detail.href ? (
                <a href={detail.href} className="meeting-link" target="_blank" rel="noreferrer">
                  {detail.value}
                </a>
              ) : (
                <strong>{detail.value}</strong>
              )}
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Meetings;
