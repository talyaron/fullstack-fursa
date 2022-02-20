import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <Link to="/second"></Link>
      <Link to="/third"></Link>
    </nav>
  );
}

export default Nav;
