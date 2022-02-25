import React, {useState} from 'react'
import Header from './Header'
// import Btn from './Btn'
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import  { setAge } from "../../slice"

function Age() {
  const dispatch = useDispatch();
  const [state, setState] = useState({age:""})
  // const refValues = useRef({age:""});

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
        value={state.age}
        onChange={(e) => setState(({age: e.target.value }))}
        required
      ></input> <br></br>
          <Link to="/height">
        <button onClick={() => dispatch(setAge(state))} className="Acoount">
          <b>next</b>
        </button>
      </Link>
      </div>
    </div>
  );
}

export default Age
