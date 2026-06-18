import Hero from "../components/Hero";
import SalonCard from "../components/SalonCard";

function Home() {
  return (
    <>
      <Hero />

      <section className="featured">
        <h2>Featured Salons</h2>

        <div className="salonGrid">
          <SalonCard name="Royal Hair Studio" service="Haircut • Beard • Spa" rating="4.8" />
          <SalonCard name="Urban Groom" service="Hair Styling • Facial" rating="4.6" />
          <SalonCard name="Gold Scissors" service="Premium Salon Services" rating="4.9" />
        </div>
      </section>

      <section className="services">
        <h2>Trending Services</h2>

        <div className="serviceGrid">
          <div className="serviceCard">Haircut</div>
          <div className="serviceCard">Beard Trim</div>
          <div className="serviceCard">Facial</div>
          <div className="serviceCard">Hair Spa</div>
        </div>
      </section>

      <section className="howItWorks">
        <h2>How It Works</h2>

        <div className="stepsGrid">
          <div className="stepCard"><h3>1. Search Salon</h3><p>Find the best salons near your location.</p></div>
          <div className="stepCard"><h3>2. Choose Service</h3><p>Select haircut, beard, facial, spa or grooming service.</p></div>
          <div className="stepCard"><h3>3. Book Slot</h3><p>Pick your preferred date and time.</p></div>
          <div className="stepCard"><h3>4. Confirm Booking</h3><p>Book instantly and get confirmation.</p></div>
        </div>
      </section>

      <section className="reviews">
        <h2>Customer Reviews</h2>

        <div className="reviewGrid">
          <div className="reviewCard"><p>"Easy booking and great salon experience."</p><h4>— Priya Sharma</h4></div>
          <div className="reviewCard"><p>"I booked my haircut in just 2 minutes."</p><h4>— Rahul Verma</h4></div>
          <div className="reviewCard"><p>"Premium salons and smooth appointment flow."</p><h4>— Anjali Mehta</h4></div>
        </div>
      </section>

      <footer className="footer">
        <h2>EZYCUT</h2>
        <p>Premium Salon Booking Platform</p>
        <p>© 2026 EZYCUT. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Home;