import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <Link to="/london">London</Link>
      <Link to="/newYork">NewYork</Link>
      <Link to="/telAviv">TelAviv</Link>

    </nav>
  );
}

export default Navbar;
