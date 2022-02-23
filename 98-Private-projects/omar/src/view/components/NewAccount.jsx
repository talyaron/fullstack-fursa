import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';

import './NewAccount.css'
function NewAccount() {
  return (
    <div className="SignUp">
      <Header />
      <p><b>please fill out these fields</b></p>
      <input
        className="Input"
        type="text"
        placeholder="Enter First name"
        name="fname"
        required
      ></input>
      <input
        className="Input"
        type="text"
        placeholder="Enter Last name"
        name="lname"
        required
      ></input>
      <input
        className="Input"
        type="text"
        placeholder="Enter Email"
        name="email"
        required
      ></input>
      <input
        className="Input"
        type="password"
        placeholder="Enter Password"
        name="psw"
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
        <button className="Acoount">
          <b>sign up</b>
        </button>
      </Link>
    </div>
  );
}

export default NewAccount
