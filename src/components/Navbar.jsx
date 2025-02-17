import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/intro">Intro</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;
