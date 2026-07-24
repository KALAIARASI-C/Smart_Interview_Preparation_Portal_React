import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Smart Interview
      </div>

      <ul className="nav-links">

        <li><Link to="/">Home</Link></li>

        <li><Link to="/about">About</Link></li>

        <li><Link to="/coding">Coding</Link></li>

        <li><Link to="/aptitude">Aptitude</Link></li>

        <li><Link to="/mock-interview">Mock Interview</Link></li>

        <li><Link to="/company-preparation">Companies</Link></li>

        <li><Link to="/progress">Progress</Link></li>

        <li><Link to="/profile">Profile</Link></li>

        <li><Link to="/contact">Contact</Link></li>

      </ul>

      <div className="buttons">
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>

        <Link to="/register">
          <button className="register-btn">Register</button>
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;