import React from 'react'
import Header from './Header'
import Btn from './Btn'
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import ConstructionIcon from '@mui/icons-material/Construction';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import  { setMainGoal } from "../../slice"
function MainGoal() {
  const dispatch = useDispatch();
  return (
    <div>
      {/* title + logo + what's your main goal text + 3 buttons + Next button */}
      <Header/>
      <div className='Middle'>
      <p className="underTilte">what's your main goal ? </p>
      <button className="Male" onClick={() => dispatch(setMainGoal('Losing weight'))}>
        <MonitorWeightIcon className="Icon"/>
        <b>Losing weight</b>
      </button>
      <button className="Male" onClick={() => dispatch(setMainGoal('build muscles'))}>
        <ConstructionIcon className="Icon"/>
        <b>build muscles</b>
      </button>
      <button className="Male" onClick={() => dispatch(setMainGoal('keep fit'))}>
        <FitnessCenterIcon className="Icon"/>
        <b>keep fit</b>
      </button>
      <Link className="linkStyle" to="/Activity">
          <Btn title={'next'}/>
        </Link>
        </div>
    </div>
  )
}

export default MainGoal
