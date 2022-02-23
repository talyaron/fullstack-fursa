import React from 'react'
import Header from './Header'
import Btn from './Btn'
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';


function Activities() {
  return (
    <div>
      {/* title + logo + which Activities text + 3 buttons + Next button */}
      <Header />
      <div className="Middle">
        <p className="underTilte">Which activities do you prefer ? </p>
        <button className="Male">
          <HomeIcon className="Icon"/>
          <b>fitness at home</b>
        </button>
        <button className="Male">
          <FitnessCenterIcon className="Icon"/>
          <b>fitness at gym</b>
        </button>
        <button className="Male">
          <DirectionsRunIcon className="Icon"/>
          <b>running</b>
        </button>
        <Link className="linkStyle" to="/name">
          <Btn title={"next"} />
        </Link>
      </div>
    </div>
  );
}

export default Activities

