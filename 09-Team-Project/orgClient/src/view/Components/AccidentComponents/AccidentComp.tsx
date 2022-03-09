import React from 'react'
import { useNavigate } from 'react-router-dom';
import './AccidentComp.scss';

function AccidentComp(props: any) {
    const { accident } = props;
    const nav = useNavigate();

    function handleComp() {
        nav(`/${accident._id}`)
    }

    return (
        <div className='AccidentCompContainer' onClick={handleComp}>
            <div className="firstConnect">{accident.type}</div>
            <div className="accidentDetails">
                <div className="targetName">{accident.user.name}</div>
                <div className="accidentDetails_details">{accident.description}</div>
            </div>
            <div className="notifications">notifications</div>
            {accident.emergency ? <label style={{ color: "red" }}>emergency</label> : null}
        </div>
    )
}

export default AccidentComp