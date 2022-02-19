import { Link } from "react-router-dom";
import './Navbar.scss';
function Navbar() {
  return (
    <nav>
      <Link to="/store">Store</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;
