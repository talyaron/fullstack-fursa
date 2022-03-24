import React, { useEffect, useState } from "react";
import "./logIn.scss";
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { fetchUser, getloginState } from '../../../app/reducer/userReducer';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch()
  let isLoged = useAppSelector(getloginState)
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoged) {
      console.log(isLoged);
      navigate("/");
    }
  }, [isLoged])
  function hadleSubmit(e: any) {
    e.preventDefault();

    dispatch(fetchUser({ "email": email, "password": password }));
    if (isLoged) {
      console.log(isLoged)
      navigate("/profile")
    }


  }

  return (
    <div className="login">
      <Navbar></Navbar>
      <div className="login__main">
        <h1> تسجيل الدخول </h1>
        <form onSubmit={hadleSubmit}>
          <TextField required name="email" label="Email" variant="standard" onChange={(e: any) => setEmail(e.target.value)} />
          <TextField required name="password" label="Password" variant="standard" type="password" onChange={(e: any) => setPassword(e.target.value)} />
          <div className="login__main__remember">
            <input type="checkbox" id="remember" value="remember" />
            <span>تذكرني  </span>
          </div>
          <Button variant="contained" style={{ marginTop: '1rem' }} type="submit">تسجيل الدخول</Button>
          { }
        </form>
      </div>
    </div>
  );
}
export default LogIn;
