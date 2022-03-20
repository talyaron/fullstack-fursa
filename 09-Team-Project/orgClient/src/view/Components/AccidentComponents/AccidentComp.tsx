import React from 'react'
import { useNavigate } from 'react-router-dom';
import './AccidentComp.scss';
import shareIcon from '../../photos/share.jpg';
import emergencyIcon from '../../photos/emergency.jpg';

function AccidentComp(props: any) {
    const { accident } = props;
    const nav = useNavigate();

    function handleComp() {
        nav(`/${accident._id}`)
    }

    return (
        <div className='AccidentCompContainer' onClick={handleComp}>
            <div className="firstConnect">
                <img style={{ width: "40px", height: "40px" }} src={shareIcon} />
            </div>
            <div className="accidentDetails">
                <div className="targetName">{accident.user.name}</div>
                <div className="accidentDetails_details">{accident.description}</div>
            </div>
            <div className="notifications">6</div>
            {accident.emergency ? <img style={{ width: "40px", height: "40px" }} src={emergencyIcon} /> : null}
        </div>
    )
}

export default AccidentComp