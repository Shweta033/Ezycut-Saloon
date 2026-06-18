function Services() {
  const services = [
    {
      icon: "✂️",
      title: "Haircut & Styling",
      price: "₹299 onwards",
      desc: "Trendy haircut, trimming, blow dry and styling.",
    },
    {
      icon: "🧔",
      title: "Beard Grooming",
      price: "₹149 onwards",
      desc: "Beard trim, shaping, shaving and grooming.",
    },
    {
      icon: "💆",
      title: "Facial & Cleanup",
      price: "₹499 onwards",
      desc: "Glow facial, detan, cleanup and skin care.",
    },
    {
      icon: "💇",
      title: "Hair Spa",
      price: "₹799 onwards",
      desc: "Hair nourishment and repair treatment.",
    },
    {
      icon: "🎨",
      title: "Hair Coloring",
      price: "₹999 onwards",
      desc: "Global color, highlights and root touch-up.",
    },
    {
      icon: "💄",
      title: "Makeup",
      price: "₹1499 onwards",
      desc: "Party, engagement and bridal makeup.",
    },
  ];

  return (
    <main className="services-page-final">
      <section className="services-header-final">
        <h1>Our Premium Services</h1>
        <p>Choose your salon service and book your appointment instantly.</p>
      </section>

      <section className="services-grid-final">
        {services.map((service) => (
          <div className="services-card-final" key={service.title}>
            <div className="services-icon-final">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <span>{service.price}</span>
            <button type="button">Book Now</button>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Services;
