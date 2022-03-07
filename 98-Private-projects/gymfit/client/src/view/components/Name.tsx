import React from 'react'
import Header from './Header'
import Btn from './Btn'
import { Link } from 'react-router-dom';

function Name() {
  return (
    <div>
      {/* name + TextField + next button */}
      <Header />
      <div className="Middle">
        <p className="underTilte">What's your name ? </p>
        <input
        className="Input"
        type="text"
        placeholder="Enter your full name"
        name="fname"
        required
      ></input> <br></br>
      <Link className="linkStyle" to="/age">
          <Btn title={"next"} />
        </Link>
      </div>
    </div>
  );
}

export default Name
