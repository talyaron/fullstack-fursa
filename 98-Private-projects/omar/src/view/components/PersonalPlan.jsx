import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import BottomNav from './BottomNav' 
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
function PersonalPlan() {
  return (
    <div>
      <Header />
      <div className="Middle">
        <p className="underTilte">Let's start training !  </p>
        <Link className="linkStyle" to="/Emptyplan">
        <button className="Male">
          <AddIcon className="Icon"/>
          <b>Empty plan</b>
        </button>
        </Link>

        <Link className="linkStyle" to="/planGenerator">
        <button className="Male">
          <FitnessCenterIcon className="Icon"/>
          <b>My plans</b>
        </button>
        </Link>
        <Link className="linkStyle" to="/singleWorkout">
        <button className="Male">
          <DirectionsRunIcon className="Icon"/>
          <b>Single workout</b>
        </button>
        </Link> <br></br>
        <BottomNav/>
      </div>
    </div>
  );
}

export default PersonalPlan
