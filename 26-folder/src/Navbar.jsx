import { Link } from "react-router";
import "./Header.css";

const Navbar = () => {
  return (
    <nav className="navbar">

      <Link className="logo" to="/">
        <h2>Logo</h2>
      </Link>

      <ul className="nav-links">
        <li>
          <Link className="link" to="/">Home</Link>
        </li>

        <li>
          <Link className="link" to="/login">Login</Link>
        </li>

        <li>
          <Link className="link" to="/about">About</Link>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;