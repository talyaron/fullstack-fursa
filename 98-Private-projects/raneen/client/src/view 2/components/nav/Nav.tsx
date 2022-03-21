import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <Link to="/Coats">Coats</Link>
      <Link to="/Shirts">Shirts</Link>
    </nav>
  );
}

export default Nav;
