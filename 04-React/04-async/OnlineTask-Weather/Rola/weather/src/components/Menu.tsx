import React from "react";
import { Link } from 'react-router-dom';
import '../components/Menu.scss'

function Menu() {
  return (
    <div className="nav">
      <Link to="/NewYork">NYC</Link>
      <Link to="/TelAviv">TelAviv</Link>
      <Link to="/London">London</Link>
    </div>
  );
}

export default Menu;
