
import React from 'react'
import './preAccComp.scss';



function preAccidentComp(props: any) {
  //  const { connect, details, notifications } = props;
    const { type, date, address } = props;

    function handleComp(){
        console.log("clicked!");
    }

    return (
        <div className='AccidentCompContainer' onClick={handleComp}>
              
            <div className="type">type : {type}</div>
            {/* <div className="accidentDetails"> */}
                {/* <div className="targetName">{details.name}</div>
                <div className="accidentDetails_details">{details.content}</div> */}
                 <div className="date">date : {date}</div> 
            {/* </div> */}
            <div className="address">address: {address}</div>
        </div>
    )
}

export default preAccidentComp