import { Link } from "react-router-dom";
import './Navbar.scss';
function Navbar() {
  return (
    <nav>
      <div className="dropdown">
      <Link className="toStore" to="/store">Store
      <div className="dropdown-content">
    <Link to="/rawmaterial">Raw Material</Link>
    <Link to="/rawmaterial">Wood Products</Link>
    <Link to="/rawmaterial">Delivery</Link>
  </div>
      </Link>
      </div>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;
