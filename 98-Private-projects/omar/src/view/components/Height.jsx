import React from 'react'
import Header from './Header'
import Btn from './Btn'
import { Link } from 'react-router-dom';
import ComboBox from './ComboBox';

const measurment = [
  { label: 'CM' },
  { label: 'FT' } ]

function Height() {
  return (
    <div>
      {/* your heght + CM/FT + TextField + next button  */}
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
          required
        ></input>{" "}
        <br></br>
        <Link className="linkStyle" to="/weight">
          <Btn title={"next"} />
        </Link>
      </div>
    </div>
  );
}

export default Height
