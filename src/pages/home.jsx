import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [locationLabel, setLocationLabel] = useState("Detecting location...");
  const offerImage =
    "https://www.fourseasons.com/alt/img-opt/~70.1530.0%2C0000-156%2C5736-3000%2C0000-1687%2C5000/publish/content/dam/fourseasons/images/web/WES/WES_727_original.jpg";

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationLabel("Location unavailable");
      return;
    }

    const updateLocation = async (latitude, longitude) => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`,
          {
            headers: {
              Accept: "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Reverse geocoding failed");
        }

        const data = await response.json();
        const address = data.address || {};
        const city =
          address.city ||
          address.town ||
          address.village ||
          address.state_district ||
          "Your Area";
        const country = address.country_code
          ? address.country_code.toUpperCase()
          : "IN";

        setLocationLabel(`${city}, ${country}`);
      } catch {
        setLocationLabel("Location detected");
      }
    };

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        updateLocation(coords.latitude, coords.longitude);
      },
      () => {
        setLocationLabel("Location permission needed");
      },
      {
        enableHighAccuracy: true,
        timeout: 8000,
        maximumAge: 300000,
      }
    );
  }, []);

  const services = [
    { icon: "✂", label: "Haircut", value: "Haircut & Styling" },
    { icon: "☺", label: "Beard", value: "Beard Grooming" },
    { icon: "✦", label: "Facial", value: "Facial & Cleanup" },
    { icon: "◔", label: "Hair Spa", value: "Hair Spa" },
    { icon: "☆", label: "Grooming", value: "Haircut & Styling" },
    { icon: "□", label: "Packages", value: "Makeup" },
  ];

  const salons = [
    {
      name: "Noir & Gold Studio",
      type: "Premium Grooming",
      rating: "4.9",
      reviews: "312",
      price: "From Rs 299",
      distance: "0.4 km",
      wait: "~15 min wait",
      badge: "Top Rated",
      status: "Open",
      image:
        "https://www.fourseasons.com/alt/img-opt/~70.1530.0%2C0000-19%2C0736-3000%2C0000-1687%2C5000/publish/content/dam/fourseasons/images/web/WES/WES_736_original.jpg",
      imagePosition: "center center",
      imageTone: "warm",
    },
    {
      name: "Velvet Chair Lounge",
      type: "Modern Hair Styling",
      rating: "4.8",
      reviews: "184",
      price: "From Rs 349",
      distance: "1.2 km",
      wait: "Slots from 5:30 PM",
      badge: "Trending",
      status: "Open",
      image:
        "https://www.fourseasons.com/alt/img-opt/~70.1530.0%2C0000-226%2C6726-3000%2C0000-1687%2C5000/publish/content/dam/fourseasons/images/web/WES/WES_733_original.jpg",
      imagePosition: "center 30%",
      imageTone: "deep",
    },
  ];

  const trendingServices = [
    {
      title: "Gold Facial",
      price: "Rs 599",
      badge: "Hot",
      image:
        "https://www.fourseasons.com/alt/img-opt/~70.1530.0%2C0000-156%2C5736-3000%2C0000-1687%2C5000/publish/content/dam/fourseasons/images/web/WES/WES_727_original.jpg",
      imagePosition: "center 18%",
      imageTone: "soft",
      service: "Facial & Cleanup",
    },
    {
      title: "Premium Haircut",
      price: "Rs 299",
      badge: "",
      image:
        "https://www.fourseasons.com/alt/img-opt/~70.1530.0%2C0000-167%2C0432-3000%2C0000-1687%2C5000/publish/content/dam/fourseasons/images/web/WES/WES_729_original.jpg",
      imagePosition: "center 72%",
      imageTone: "deep",
      service: "Haircut & Styling",
    },
    {
      title: "Beard Sculpting",
      price: "Rs 249",
      badge: "Hot",
      image:
        "https://www.fourseasons.com/alt/img-opt/~70.1530.0%2C0000-226%2C6726-3000%2C0000-1687%2C5000/publish/content/dam/fourseasons/images/web/WES/WES_733_original.jpg",
      imagePosition: "center 42%",
      imageTone: "warm",
      service: "Beard Grooming",
    },
    {
      title: "Scalp Treatment",
      price: "Rs 449",
      badge: "",
      image:
        "https://www.fourseasons.com/alt/img-opt/~70.1530.0%2C0000-77%2C9655-3000%2C0000-1687%2C5000/publish/content/dam/fourseasons/images/web/WES/WES_732_original.jpg",
      imagePosition: "center center",
      imageTone: "bright",
      service: "Hair Spa",
    },
  ];

  return (
    <main className="home-shell">
      <section className="home-welcome-card">
        <div className="home-hero-grid">
          <div className="home-main-column">
            <div className="home-welcome-top">
              <div>
                <p className="home-location">{locationLabel}</p>
                <h1>Good Morning, Deep</h1>
              </div>

              <div className="home-avatar">A</div>
            </div>

            <div className="home-search-bar">
              <span className="home-search-icon">⌕</span>
              <input placeholder="Search salons, services..." type="text" />
            </div>
          </div>

          <div className="home-offer-banner">
            <div
              className="home-offer-image"
              style={{
                backgroundImage: `url(${offerImage})`,
                backgroundPosition: "center center",
              }}
            />
            <span className="home-offer-tag">Limited Offer</span>
            <h2>20% Off Your First Visit</h2>
            <p>
              Code: <strong>EZYCUT20</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-head">
          <h2>Services</h2>
          <Link to="/services">See all</Link>
        </div>

        <div className="home-service-row">
          {services.map((service) => (
            <Link
              className="home-service-pill"
              key={service.label}
              to={`/checkout?service=${encodeURIComponent(service.value)}`}
            >
              <span>{service.icon}</span>
              <p>{service.label}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-head">
          <h2>Nearby Salons</h2>
          <Link to="/salons">See all</Link>
        </div>

        <div className="home-salon-stack">
          {salons.map((salon) => (
            <article className="home-salon-card" key={salon.name}>
              <div
                className={`home-salon-visual home-image-${salon.imageTone}`}
                style={{
                  backgroundImage: `url(${salon.image})`,
                  backgroundPosition: salon.imagePosition,
                }}
              >
                <span className="home-salon-badge">{salon.badge}</span>
                <span className="home-salon-status">{salon.status}</span>
              </div>

              <div className="home-salon-body">
                <div className="home-salon-title-row">
                  <div>
                    <h3>{salon.name}</h3>
                    <p>{salon.type}</p>
                  </div>

                  <div className="home-salon-price-box">
                    <span>★ {salon.rating}</span>
                    <small>({salon.reviews})</small>
                    <strong>{salon.price}</strong>
                  </div>
                </div>

                <div className="home-salon-meta">
                  <span>{salon.distance}</span>
                  <span>{salon.wait}</span>
                </div>

                <Link
                  className="home-book-button"
                  to={`/checkout?salon=${encodeURIComponent(salon.name)}`}
                >
                  Book Now
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-head">
          <h2>Trending Services</h2>
        </div>

        <div className="home-trending-grid">
          {trendingServices.map((item) => (
            <Link
              className="home-trending-card"
              key={item.title}
              to={`/checkout?service=${encodeURIComponent(item.service)}`}
            >
              <div
                className={`home-trending-visual home-image-${item.imageTone}`}
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundPosition: item.imagePosition,
                }}
              >
                {item.badge ? (
                  <span className="home-trending-badge">{item.badge}</span>
                ) : null}
              </div>

              <div className="home-trending-body">
                <h3>{item.title}</h3>
                <strong>{item.price}</strong>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-rewards-card">
        <div>
          <h2>EZY Rewards</h2>
          <p>Earn gold points on every booking</p>
        </div>

        <div className="home-rewards-points">
          <strong>450</strong>
          <span>pts</span>
        </div>
      </section>
    </main>
  );
}

export default Home;
