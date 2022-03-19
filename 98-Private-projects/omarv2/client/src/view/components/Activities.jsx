import React from 'react'
import Header from './Header'
import Btn from './Btn'
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import { useDispatch } from "react-redux";
import  { setActivity } from "../../slice"
import BackButton from './BackButton';

function Activities() {
  const dispatch = useDispatch();
  return (
    <div>
    <Link to='/goal'><BackButton/></Link>   
   <Header />
      <div className="Middle">
        <p className="underTilte">Which activities do you prefer ? </p>
        <button className="Male" onClick={() => dispatch(setActivity('fitness at home'))}>
          <HomeIcon className="Icon"/>
          <b>fitness at home</b>
        </button>
        <button className="Male" onClick={() => dispatch(setActivity('fitness at gym'))}>
          <FitnessCenterIcon className="Icon" />
          <b>fitness at gym</b>
        </button>
        <button className="Male" onClick={() => dispatch(setActivity('running'))}>
          <DirectionsRunIcon className="Icon"/>
          <b>running</b>
        </button>
        <Link className="linkStyle" to="/age">
          <Btn title={"next"} />
        </Link>
      </div>
    </div>
  );
}

export default Activities

