import React, { useEffect, useState } from 'react'
import './Accident.scss';

import AccidentComp from '../../Components/AccidentComponents/AccidentComp';

function Accident() {
  const text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi repudiandae esse voluptatem libero totam cumque, amet, maxime vitae dolore minima nesciunt laudantium beatae rerum odit possimus. Dolore quod veniam dolorem?";
  const [accidents, setAccidents] = useState<Array<any>>([
    { details: { name: "test 1", content: text }, notifications: 10 },
    { details: { name: "test 2", content: text }, notifications: 5 },
    { details: { name: "test 3", content: text }, notifications: 4 },
  ]);

  useEffect(() => {
    console.log("Accident");
  }, [])

  return (
    <div className='AccidentContainer'>
      <div className="accidentHeader">
        <div className="accidentHeader_home">Home</div>
        <div className="accidentHeader_search">search</div>
        <div className="accidentHeader_settings">settings</div>
      </div>
      <div className="accidentsContent">
        {accidents.map((accident, index) => {
          return (
            <AccidentComp connect={"connect"} details={accident.details} notifications={accident.notifications} />
          );
        })}
      </div>
    </div>
  )
}

export default Accident