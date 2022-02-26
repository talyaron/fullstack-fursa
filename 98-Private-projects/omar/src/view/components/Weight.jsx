import React, {useState} from 'react'
import Header from './Header'

import { Link } from 'react-router-dom';
import ComboBox from './ComboBox';
import { useDispatch } from "react-redux";
import  { setWeight } from "../../slice"
import BackButton from './BackButton';


const measurment = [
  { label: 'KG' },
  { label: 'LBS' } ]
  
function Weight() {
  const dispatch = useDispatch();
  const [state, setState] = useState({weight:""})
  return (
    <div>
      <Link to='/height'><BackButton/></Link>
      
      {/* your weight + CM/FT + TextField + next button  */}
      <Header/>
      <div className="Middle">
        <p className="underTilte">your weight? </p>
        <ComboBox measurment={measurment}/>
        <br></br>
        <input
        className="Input1"
        type="text"
        placeholder="Enter your weight"
        name="weight"
        value={state.weight}
        onChange={(e) => setState(({weight: e.target.value }))}
        required
      ></input> <br></br>
        <Link to="/personalplan">
        <button onClick={() => dispatch(setWeight(state))} className="Acoount">
          <b>next</b>
        </button>
        </Link>
      </div>
    </div>
  )
}

export default Weight
