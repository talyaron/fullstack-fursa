import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../app/hooks';
import { changeNavText } from '../../../app/reducer/NavTextReducer';
import './Homepage.scss';

const Homepage = () => {

    const nav = useNavigate();
    const {state}:any = useLocation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(changeNavText(""));
      }, [dispatch]);


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