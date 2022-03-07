import React, {useState} from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';
import ComboBox from './ComboBox';
import { useDispatch } from "react-redux";
import  { setHeight } from "../../slice"
import BackButton from './BackButton';

const measurment = [
  { label: 'CM' },
  { label: 'FT' } ]

function Height() {
  const dispatch = useDispatch();
  const [state, setState] = useState({height:""})
  return (
    <div>
      <Link to='/age'><BackButton/></Link> 
      <Header />
      <div className="Middle">
        <p className="underTilte">your height? </p>
        <ComboBox measurment={measurment} />
        <br></br>
        <input
          className="Input1"
          type="text"
          placeholder="Enter your height"
          name="height"
          value={state.height}
          onChange={(e) => setState(({height: e.target.value }))}
          required
        ></input>{" "}
        <br></br>
        <Link to="/weight">
        <button onClick={() => dispatch(setHeight(state))} className="Acoount">
          <b>next</b>
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Height
