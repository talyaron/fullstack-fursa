import React from 'react'
import './AccidentComp.scss';

function AccidentComp(props: any) {
    const { connect, details, notifications } = props;

    function handleComp(){
        console.log("clicked!");
    }

    return (
        <div className='AccidentCompContainer' onClick={handleComp}>
            <div className="firstConnect">{connect}</div>
            <div className="accidentDetails">
                <div className="targetName">{details.name}</div>
                <div className="accidentDetails_details">{details.content}</div>
            </div>
            <div className="notifications">{notifications}</div>
            {true? <label>emergency</label>:<label>not emergency</label>}
        </div>
    )
}

export default AccidentComp