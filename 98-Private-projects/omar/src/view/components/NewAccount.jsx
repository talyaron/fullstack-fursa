import React, {useRef} from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';
import './NewAccount.css'
import { useDispatch } from "react-redux"
import  { setUser } from "../../slice"
function NewAccount() {
  const dispatch = useDispatch();

  console.log("RENDER")

  // const [state, setState] = useState({firstname: "", lastname: "", email: ""})
 const refValues = useRef({firstname: "", lastname: "", email: ""});
  return (
    <div className="SignUp">
      <Header />
      <p><b>please fill out these fields</b></p>
      <input
        className="Input"
        type="text"
        placeholder="Enter First name"
        name="fname"
        // value={state.firstname}
        // onChange={(e) => setState(prev => ({...prev ,firstname: e.target.value }))}
        onChange={(e) => refValues.current.firstname = e.target.value}
        required
      ></input>
      <input
        className="Input"
        type="text"
        placeholder="Enter Last name"
        name="lname"
        // value={state.lastname}
        // onChange={(e) => setState(prev => ({...prev ,lastname: e.target.value }))}
        onChange={(e) => refValues.current.lastname = e.target.value}
        required
      ></input>
      <input
        className="Input"
        type="text"
        placeholder="Enter Email"
        name="email"
        // value={state.email}
        // onChange={(e) => setState(prev => ({...prev ,email: e.target.value }))}
        onChange={(e) => refValues.current.email = e.target.value}
        required
      ></input>
      <input
        className="Input"
        type="password"
        placeholder="Enter Password"
        name="password"
        required
      ></input>
      <input
        className="Input"
        type="password"
        placeholder="Repeat Password"
        name="psw-repeat"
        required
      ></input>
      <Link to="/gender">
      {/* onClick={() => dispatch(setUser(state))} */}
      {/* onClick={() => dispatch(setUser(refValues.current))} */}
        <button onClick={() => dispatch(setUser(refValues.current))} className="Acoount">
          <b>sign up</b>
        </button>
      </Link>
    </div>
  );
}

export default NewAccount
