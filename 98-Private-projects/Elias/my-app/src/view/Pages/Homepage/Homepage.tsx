import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './Homepage.scss';

const Homepage = () => {

    const nav = useNavigate();
    const {state}:any = useLocation();


    function clickNewTravel(e:any){
        nav('/TravelInfo1', {
            state: state
        });
    }
    return (

        <div className='wrapper'>
            <div className='GloabGIF'>
                <div className='imge'></div>

            </div>
            <div className='NewTravelbtn_Wrapper'>
                <button className='NewTravelbtn' onClick={clickNewTravel}>New Travel</button>
            </div>
        </div>
    )

}

export default Homepage;