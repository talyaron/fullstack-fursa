import React from 'react'
import TodayIcon from '@mui/icons-material/Today';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import Btn from './Btn'
import { Link } from 'react-router-dom';


function Test() {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <TodayIcon style={{ fontSize: 50 }} />
      </div>
      <div className="grid-item">Plan Duration</div>
      <div className="grid-item">
        <Btn title={"select"} />
      </div>
      <div className="grid-item">
        <FitnessCenterIcon style={{ fontSize: 50 }} />
      </div>
      <div className="grid-item">Exercises</div>
      <div className="grid-item">
        <Btn title={"add"} />
      </div>
      <div className="grid-item">
        <LibraryMusicIcon style={{ fontSize: 50 }} />
      </div>
      <div className="grid-item">Music</div>
      <div className="grid-item">
        <Link className="linkStyle" to="/Music">
          <Btn title={"add"} />
        </Link>
      </div>
      <Link className="linkStyle" to="/Music">
          <Btn title={"add to your plans"} />
        </Link>
    </div>
  );
}

export default Test
