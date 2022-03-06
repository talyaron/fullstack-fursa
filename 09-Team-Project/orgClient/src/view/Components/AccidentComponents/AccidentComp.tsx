import React from 'react'
import './AccidentComp.scss';

function AccidentComp(props: any) {
    const { connect, details, notifications } = props;

    return (
        <div className='AccidentCompContainer'>
            <div className="firstConnect">{connect}</div>
            <div className="accidentDetails">
                <div className="targetName">{details.name}</div>
                <div className="accidentDetails_details">{details.content}</div>
            </div>
            <div className="notifications">{notifications}</div>
        </div>
    )
}

export default AccidentComp