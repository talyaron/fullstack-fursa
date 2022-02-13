import { Link } from "react-router-dom";
import './Nav.scss';
function Nav() {
  return (
    <nav>
      <Link to="/expenses">Expenses</Link>
      <Link to="/invoices">Invoices</Link>
      <Link to='/store'>Store</Link>
    </nav>
  );
}

export default Nav;
