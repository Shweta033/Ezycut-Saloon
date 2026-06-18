import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>EZYCUT</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/salons">Salons</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;