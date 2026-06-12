function Hero() {
  return (
    <section className="hero">
      <h1>Book Your Salon Appointment Easily</h1>

      <p>
        Find nearby salons, compare services, and book your slot instantly.
      </p>

      <div className="searchBox">
        <input placeholder="Search salon by location" />
        <button>Search</button>
      </div>
    </section>
  );
}

export default Hero;