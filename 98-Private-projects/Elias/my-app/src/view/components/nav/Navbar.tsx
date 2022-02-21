import React from 'react'
import './Navbar.scss'
import Burger from './Burger'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='nav'>
    <div className="backb" onClick={() => navigate(-1)}>
    <p><i className="arrow-left"></i></p>
    </div>
      <Burger/>
    </div>
  )
}

export default Navbar;