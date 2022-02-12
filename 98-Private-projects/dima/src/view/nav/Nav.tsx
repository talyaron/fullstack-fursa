import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <Link to="/expenses">Expenses</Link>
      <Link to="/invoices">Invoices</Link>
    </nav>
  );
}

export default Nav;
