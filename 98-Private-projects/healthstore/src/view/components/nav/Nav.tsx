import { Link } from "react-router-dom";
import './Nav.scss';
//import {FaTwitter} from 'react-icons/fa'
import {SocialIcon} from 'react-social-icons'

function Nav() {
  return (
    <nav>
      <div className="icon">
        <Link to="/">Home</Link>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <a href="#" className="fa fa-facebook"></a>
        <a href="#" className="fa fa-instagram"></a>
        <a href="#" className="fa fa-phone"></a>
        <a href="#" className="fa fa-car"></a>
      </div>
    </nav>
  );
}

export default Nav;


/*
<Link to="/"> <SocialIcon network="facebook" /></Link>
<Link to="/"> <SocialIcon network="instagram" /></Link>*/