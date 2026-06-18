function Contact() {
  const contactOptions = [
    {
      title: "Customer Support",
      detail: "Help with bookings, refunds, cancellations, and slot updates.",
      value: "support@ezycut.in",
    },
    {
      title: "Salon Partnerships",
      detail: "Join EZYCUT and start receiving online bookings from nearby users.",
      value: "partners@ezycut.in",
    },
    {
      title: "Call Us",
      detail: "Speak with our team for urgent booking or business questions.",
      value: "+91 98765 43210",
    },
  ];

  const quickStats = [
    { value: "< 10 min", label: "First response time" },
    { value: "24/7", label: "Booking assistance" },
    { value: "300+", label: "Salon partners onboarded" },
  ];

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-copy">
          <p className="contact-eyebrow">Contact EZYCUT</p>
          <h1>We are here to help you book better, faster, and stress-free.</h1>
          <p className="contact-subcopy">
            Whether you are a customer with a booking question or a salon owner
            looking to partner with us, our team is ready to help.
          </p>
        </div>

        <div className="contact-stats">
          {quickStats.map((stat) => (
            <div className="contact-stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-info-grid">
          {contactOptions.map((item) => (
            <article className="contact-info-card" key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.detail}</p>
              <span>{item.value}</span>
            </article>
          ))}
        </div>

        <section className="contact-form-card">
          <div className="contact-form-copy">
            <p className="contact-form-label">Send a message</p>
            <h2>Tell us what you need and we will get back to you soon.</h2>
          </div>

          <form className="contact-form">
            <div className="contact-form-grid">
              <label>
                <span>Name</span>
                <input placeholder="Your name" type="text" />
              </label>

              <label>
                <span>Email</span>
                <input placeholder="you@example.com" type="email" />
              </label>
            </div>

            <div className="contact-form-grid">
              <label>
                <span>Phone</span>
                <input placeholder="+91 98765 43210" type="tel" />
              </label>

              <label>
                <span>Topic</span>
                <select defaultValue="Booking help">
                  <option>Booking help</option>
                  <option>Salon partnership</option>
                  <option>Refund issue</option>
                  <option>General inquiry</option>
                </select>
              </label>
            </div>

            <label className="contact-message-field">
              <span>Message</span>
              <textarea
                placeholder="Share your question or requirement here..."
                rows="6"
              />
            </label>

            <button className="contact-submit-button" type="button">
              Send Message
            </button>
          </form>
        </section>
      </section>
    </main>
  );
}

export default Contact;
