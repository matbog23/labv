export default function Features() {
    const features = [
      { title: 'Premium Ride Experience', description: 'Experience a seamless and professional travel service. Select highly rated drivers and enjoy the comfort of tailored rides, or connect with high-end clients who value quality and reliability. Whether you’re traveling or offering your expertise, the platform ensures comfort, safety, and satisfaction every step of the way.', id: 1 },
      { title: 'Flexible and Transparent Booking', description: 'Plan ahead with ease—schedule rides, browse detailed profiles, and find the perfect match. Whether booking or accepting a ride, all the details are clear, ensuring transparency and trust. Enjoy the freedom to choose what works best for your schedule and preferences.', id: 2 },
      { title: 'Luxury Meets Simplicity', description: 'Our intuitive app combines elegance and efficiency, making every interaction effortless. From smooth booking to detailed ride tracking, the platform delivers a first-class experience. Focus on what matters most while we handle the rest, ensuring simplicity and sophistication in every journey.', id: 3 },
    ];
  
    return (
      <section className="container" id="features">
        <h1>Key Features</h1>
        <div className="features container">
        {features.map((feature) => (
          <div className="feature-card" key={feature.id}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
        </div>
      </section>
    );
  }
  