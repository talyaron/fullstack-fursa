import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import Burger from './Burger'
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks';
import { ChangeNav } from '../../../app/reducer/NavTextReducer';

const Navbar = () => {
  const navigate = useNavigate();
  const [NavHeader, setNavHeader] = useState("");
  const NavText = useAppSelector(ChangeNav);
  console.log(NavText);

  useEffect(() => {
    setNavHeader(NavText.Header);
  }, [NavText]);

  return (
    <div className='nav'>
      <div className="backb" onClick={() => navigate(-1)}>
        <p><i className="arrow-left"></i></p>
      </div>
      <div className='PageName'>{NavHeader}</div>
      <Burger />
    </div>
  )
}

export default Navbar;