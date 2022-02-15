import React, { useState } from 'react'
import './London.scss';

interface weatherLondon{
  LondonTemp:any;
  setLondonTemp:any;
  weather_descriptions:string;
  temperature:number;
}


function London(props :weatherLondon) {
  const [LondonTemp,setLondonTemp]=useState(props.LondonTemp);

  return (
    <div>
      <div className="weather-wrapper">

    <div className="weather-card london">
        <div className="weather-icon cloud"></div>
        <h1>14º</h1>
        <p>London</p>
    </div>
</div>
</div>
  )
}

export default London;