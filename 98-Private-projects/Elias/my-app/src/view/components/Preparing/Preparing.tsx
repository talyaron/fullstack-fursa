import React from 'react'
import './Preparing.scss';
import Globe from '../../../icons/globe_croped.gif'
import { useLocation, useNavigate } from 'react-router-dom';

const Preparing = () => {
    const nav = useNavigate();
    const {state}:any = useLocation();


    
    nav('/TravelInfo1', {
        state: state
    });

    return (
        <div className='wrapper'>
            <div className='imgeh'>
                <img src={Globe} alt="" />
            </div>
            <div className='Sitmsg'>
                <h1>Sit back & relax </h1>
                <h3>We prepare your list</h3>
            </div>

        </div>
    )
}

export default Preparing;