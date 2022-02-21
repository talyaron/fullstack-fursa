import React from 'react'
import Header from './Header'
import Btn from './Btn'
import { Link } from 'react-router-dom';

function Age() {
  return (
    <div>
      {/* how old + TextField + next button */}
      <Header />
      <div className="Middle">
        <p className="underTilte">How old are you ? </p>
        <input
        className="Input"
        type="text"
        placeholder="Enter your Age"
        name="age"
        required
      ></input> <br></br>
        <Link className="linkStyle" to="/height">
          <Btn title={"next"} />
        </Link>
      </div>
    </div>
  );
}

export default Age
