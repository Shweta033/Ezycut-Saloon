import { Link } from "react-router-dom";

function Salons() {
  const salons = [
    {
      name: "Royal Fade Lounge",
      area: "Bandra West",
      rating: "4.9",
      price: "Starts at Rs 299",
      waitTime: "Next slot in 20 min",
      services: "Haircut, beard sculpt, premium wash",
      badge: "Top Rated",
    },
    {
      name: "Urban Trim Studio",
      area: "Andheri Lokhandwala",
      rating: "4.7",
      price: "Starts at Rs 249",
      waitTime: "Next slot in 35 min",
      services: "Fade cut, cleanup, styling",
      badge: "Fast Booking",
    },
    {
      name: "Golden Mirror Salon",
      area: "Powai Hiranandani",
      rating: "4.8",
      price: "Starts at Rs 349",
      waitTime: "Next slot in 15 min",
      services: "Hair spa, color, grooming",
      badge: "Premium",
    },
    {
      name: "Craft & Comb",
      area: "Indiranagar",
      rating: "4.6",
      price: "Starts at Rs 199",
      waitTime: "Next slot in 10 min",
      services: "Quick cut, beard trim, kids cut",
      badge: "Budget Pick",
    },
    {
      name: "The Gentleman's Room",
      area: "Koramangala",
      rating: "4.9",
      price: "Starts at Rs 399",
      waitTime: "Next slot in 50 min",
      services: "Luxury shave, skin care, styling",
      badge: "Elite Care",
    },
    {
      name: "Cut Culture House",
      area: "HSR Layout",
      rating: "4.8",
      price: "Starts at Rs 279",
      waitTime: "Next slot in 25 min",
      services: "Layer cut, spa, color refresh",
      badge: "Trending",
    },
  ];

  const filters = [
    "Near Me",
    "Open Now",
    "Top Rated",
    "Under 500",
    "Hair Spa",
    "Beard Expert",
  ];

  const stats = [
    { value: "120+", label: "Verified salons" },
    { value: "15 min", label: "Average confirmation" },
    { value: "4.8/5", label: "Customer satisfaction" },
  ];

  return (
    <main className="salons-page">
      <section className="salons-hero">
        <div className="salons-hero-copy">
          <p className="salons-eyebrow">Curated salons near you</p>
          <h1>Discover salons that match your style, budget, and timing.</h1>
          <p className="salons-subcopy">
            Browse premium and everyday picks, compare ratings, and choose the
            next available slot without the usual calling around.
          </p>
        </div>

        <div className="salons-filter-row">
          {filters.map((filter) => (
            <button className="salons-filter-chip" key={filter} type="button">
              {filter}
            </button>
          ))}
        </div>

        <div className="salons-stats">
          {stats.map((stat) => (
            <div className="salons-stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="salons-listing">
        {salons.map((salon) => (
          <article className="salon-list-card" key={salon.name}>
            <div className="salon-card-top">
              <span className="salon-card-badge">{salon.badge}</span>
              <span className="salon-card-rating">Rating {salon.rating}</span>
            </div>

            <h2>{salon.name}</h2>
            <p className="salon-card-area">{salon.area}</p>
            <p className="salon-card-services">{salon.services}</p>

            <div className="salon-card-meta">
              <span>{salon.price}</span>
              <span>{salon.waitTime}</span>
            </div>

            <Link
              className="salon-card-button"
              to={`/checkout?salon=${encodeURIComponent(salon.name)}`}
            >
              View Slots
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Salons;
