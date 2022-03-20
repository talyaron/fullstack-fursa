import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";



interface weatherNY{
  NYTemp:any;
  setNYTemp:any;
  weather_descriptions:string;
  temperature:number;
}
function ny(props:weatherNY) {

    //const nav = useNavigate();
    //const {state}:any = useLocation();

    // nav('/ListForm', {
    //     state: state
    // });

    return (
      <div><div className='box'>
      <div className='wave -one'></div>
      <div className='wave -two'></div>
      <div className='wave -three'></div>
      <div className="weathercon"><i className='fas fa-sun'></i></div>
      <div className="info">
        <h2 className="location">New York</h2>
        <p className="date">MONDAY | SEP 12 | 12:34</p>
        <h1 className="temp">25 &deg;C | 77 &deg;F</h1>
      </div>
    </div>
    <span>Enable location to see yours! :)</span></div>
    )
}

export default ny;