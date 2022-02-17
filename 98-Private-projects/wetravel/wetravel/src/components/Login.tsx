import React from "react";
import "../components/Login.scss";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Logo from "../Images/Travelles.png";

function Login() {
  const handleChange = () => {};
  let history = useNavigate();
  return (
    <div className="login">
      <img src={Logo} />
      <h1>Travellers</h1>
      <p>Travel community app</p>
      <div className="login__inner">
        <TextField
          id="outlined-name"
          label="Email"
          onChange={handleChange}
          style={{
            width: "90%",
            border: "1px solid",
            backgroundColor: "gray",
            opacity: "0.6",
          }}
        />
        <TextField
          id="outlined-uncontrolled"
          label="Password"
          style={{
            width: "90%",
            margin: "1rem",
            border: "1px solid",
            backgroundColor: "gray",
            opacity: "0.6",
          }}
        />
      </div>
      <div className="contact-us-div">
        <div className="contact-us">Don't have an account?</div>
        <a href="/mainpage">Contact us</a>
      </div>
      <button
        onClick={() => {
          console.log("clicked");
          history("/mainpage");
        }}
      >
        Log In
      </button>
    </div>
  );
}
export default Login;
