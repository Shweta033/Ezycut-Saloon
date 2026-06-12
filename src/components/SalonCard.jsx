function SalonCard({ name, service, rating }) {
  return (
    <div className="salonCard">
      <h3>{name}</h3>
      <p>{service}</p>
      <span>⭐ {rating}</span>
    </div>
  );
}

export default SalonCard;