import React from 'react'
import logoImg from './logo-removebg-preview.png'
import Btn from './Btn'
import { Link } from 'react-router-dom';
import BottomNav from './BottomNav' 
import Menu from './Menu'
import {useDispatch} from "react-redux"
import {SetTime} from "../../slice"
import {useNavigate} from 'react-router-dom'
// import DateTime from './DateTime'
const Duration = () => {
  const dispatch = useDispatch();
  const [time,setTimestate] = React.useState("");
  const Navigate= useNavigate();

  const handleAddTime = () => {
    dispatch(SetTime(time));
    Navigate("/plandecider")
  }
  return (
    <div className="Middle">
      <Menu/>
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
          value={time}
          onChange={(e) => setTimestate(e.target.value)}
          required
        ></input>{" "}
        <br></br>
        <button className="Male" onClick={handleAddTime}>add</button>
          {/* <Btn onClick={() => dispatch(SetTime(time))} title={"add"} /> */}
      
        <BottomNav/>
    </div>
  );
}

export default Duration
