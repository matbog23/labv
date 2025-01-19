export default function Features() {
    const features = [
      { title: 'Fast Performance', description: 'Experience blazing fast speeds.', id: 1 },
      { title: 'Responsive Design', description: 'Looks great on any device.', id: 2 },
      { title: 'User Friendly', description: 'Intuitive and easy to use.', id: 3 },
    ];
  
    return (
      <section className="features container" id="features">
        {features.map((feature) => (
          <div className="feature-card" key={feature.id}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>
    );
  }
  