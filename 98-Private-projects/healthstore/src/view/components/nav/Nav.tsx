import { Link } from "react-router-dom";
import './Nav.scss';
import {FaFacebook,FaInstagram,FaWaze,FaPhone} from 'react-icons/fa'

function Nav() {
  return (
    <nav>
      <div className="nav">
        <Link to="/">Home</Link>
        <div className="icons">
          <Link to="/"><FaPhone/> </Link>
          <Link to="/"><FaFacebook/> </Link>
          <Link to="/"><FaInstagram/> </Link>
          <Link to="/"><FaWaze/> </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;