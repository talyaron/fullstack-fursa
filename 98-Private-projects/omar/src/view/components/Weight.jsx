import React from 'react'
import Header from './Header'
import Btn from './Btn'
import { Link } from 'react-router-dom';
import ComboBox from './ComboBox';

const measurment = [
  { label: 'KG' },
  { label: 'LBS' } ]
  
function Weight() {
  return (
    <div>
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
        required
      ></input> <br></br>
        <Link className="linkStyle" to="/personalplan">
          <Btn title={"next"} />
        </Link>
      </div>
    </div>
  )
}

export default Weight
