import './Nav.scss';
import * as React from 'react';
import { Link } from "react-router-dom";
import {FaFacebook,FaInstagram,FaWaze,FaPhone} from 'react-icons/fa'
import { Button,ButtonGroup } from '@material-ui/core';
import { Tabs ,Tab} from '@material-ui/core';

function Nav() {
  const [value, setValue] = React.useState(2);

  const handleChange = () => {
    setValue(value);
  };


  return (
    <nav>
      <div className="nav">    
      <Link to="/"><img src="https://www.pngall.com/wp-content/uploads/2016/06/Health-PNG-File.png" ></img>   </Link> 
        <ButtonGroup variant="text" aria-label="text button group" disableElevation={true}>
          <Button href="/">Home</Button>
          <Button href="vitamins">Supplements</Button>
          <Button href="Cosmetics">Cosmetics</Button>
          <Button href="Cupping Therapy">Cupping Therapy</Button>
          <Button href="Facial Treatment">Facial Treatment</Button>
          <Button href="Hopi Candles">Hopi Candles</Button>
          <Button href="Calendar">Calender</Button>
        </ButtonGroup>

        <div className="icons">
          <Link to="#"><FaPhone/> </Link>
          <Link to="#"><FaFacebook/> </Link>
          <Link to="#"><FaInstagram/> </Link>
          <Link to="#"><FaWaze/> </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

/**
 *         <Link to="/"> Home</Link>
        <Link to="vitamins">  Supplements</Link>
        <Link to="Cosmetics">  Cosmetics</Link>
          <Button><FaPhone/></Button>
          <Button><FaFacebook/></Button>
          <Button><FaInstagram/></Button>
          <Button><FaWaze/></Button>


 */