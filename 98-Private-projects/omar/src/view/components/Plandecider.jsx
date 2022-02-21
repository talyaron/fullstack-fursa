import React from 'react'
import logoImg from './logo-removebg-preview.png'
import Btn from './Btn'
import { Link } from 'react-router-dom';

function Plandecider() {
  return (
    <div className="Middle">
      <img src={logoImg} alt="" className="logo" />
      <p className="title">
        <b>Designe your Plan</b>
      </p>
      <br></br> <br></br>
    </div>
  );
}

export default Plandecider
