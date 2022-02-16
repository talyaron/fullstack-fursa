import React from 'react'
import './TA.scss';

interface weather{
  TATemp:any;
  setTATemp:any;
  weather_descriptions:string;
  temperature:number;
}
function Ta() {
  return (
    <div><article className="box weather">
    <div className="icon bubble black">
      <div className="spin">
        <img src="https://dl.dropbox.com/s/0qq5anxliaopt8d/sun.png"></img>
      </div>
    </div>
    
    <h1>Monday</h1>
    <span className="temp">23&deg;</span>
    <span className="high-low">15&deg;/ 28&deg;</span>
  </article></div>
  )
};

export default Ta;