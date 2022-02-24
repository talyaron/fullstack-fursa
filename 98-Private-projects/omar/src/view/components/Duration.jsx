import React from 'react'
import logoImg from './logo-removebg-preview.png'
import Btn from './Btn'
import { Link } from 'react-router-dom';
import BottomNav from './BottomNav' 
// import DateTime from './DateTime'
const Duration = () => {
  return (
    <div className="Middle">
      <img src={logoImg} alt="" className="logo" />
      <p className="title">
        <b>Plan Duration</b>
      </p>
      <br></br> <br></br>
        <p className="underTilte">pick the duration of the work out </p>
       {/* <DateTime/> */}
       <input
          className="Input1"
          type="text"
          placeholder="HH:mm MM-DD-YYYY"
          name="duration"
          required
        ></input>{" "}
        <br></br>
        <Link className="linkStyle" to="/plandecider">
          <Btn title={"add"} />
        </Link>
        <BottomNav/>
    </div>
  );
}

export default Duration
