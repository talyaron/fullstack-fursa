import React from 'react'
import logoImg from './logo-removebg-preview.png'
import Btn from './Btn'
import { Link } from 'react-router-dom';
import BottomNav from './BottomNav' 
import Menu  from './Menu';
function EmptyPlan() {
  return (
    <div>
    <Menu/>
    <div className="Middle">
      <img src={logoImg} alt="" className="logo" />
      <p className="title">
        <b>Personal Plan</b>
      </p>
      <br></br> <br></br>
        <p className="underTilte">How often do you want to work ? </p>
        <button className="Male">
          <b>1x per week</b>
        </button>
        <button className="Male">
          <b>2-3 per week</b>
        </button>
        <button className="Male">
          <b>4-5 per week</b>
        </button>
        <button className="Male">
          <b>5-7 per week</b>
        </button>
        <Link className="linkStyle" to="/plandecider">
          <Btn title={"next"} />
        </Link>
        <BottomNav/>
    </div>
    </div>
  );
}

export default EmptyPlan
