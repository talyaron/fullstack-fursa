import React from 'react'
import TodayIcon from '@mui/icons-material/Today';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import Btn from './Btn'
import { Link } from 'react-router-dom';
import logoImg from './logo-removebg-preview.png'
import BottomNav from './BottomNav' 
import Menu from './Menu'
import {useDispatch} from "react-redux"
import {addMyplans} from "../../slice"

function Plandecider() {
  const dispatch = useDispatch();
  const [name, setname] = React.useState("");


  const handleAddPlan = () => {
dispatch(addMyplans(name))
  }
 
  return (
    <div>
      <Menu />
      <div className="Middle">
        <img src={logoImg} alt="" className="logo" />
        <p className="title">
          <b>Personal Plan</b>
        </p>
        <br></br> <br></br> <br></br>
        <input
          className="Input1"
          value={name}
          onChange={(e) => setname(e.target.value)}
          type="text"
          placeholder="plan title"
          name="title"
          required
        ></input>
        <br></br>
        <div className="grid-container">
          <div className="grid-item">
            <TodayIcon style={{ fontSize: 50 }} />
          </div>
          <div className="grid-item">Plan Time and Date</div>
          <div className="grid-item">
            <Link className="linkStyle" to="/duration">
              <Btn title={"select"} />
            </Link>
          </div>
          <div className="grid-item">
            <FitnessCenterIcon style={{ fontSize: 50 }} />
          </div>
          <div className="grid-item">Exercises</div>
          <div className="grid-item">
            <Link className="linkStyle" to="/exercises">
              <Btn title={"add"} />
            </Link>
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
        </div>
        <Link className="linkStyle" to="/plangenerator">
          <div>
            <button className="Male" onClick={handleAddPlan}>add to my plans</button>
          </div>
        </Link>
        <BottomNav />
      </div>
    </div>
  );
}

export default Plandecider

