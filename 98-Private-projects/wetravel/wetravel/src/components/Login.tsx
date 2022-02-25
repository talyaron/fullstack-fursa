import React, { useEffect, useState } from "react";
import "../components/Login.scss";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Logo from "../Images/Travelles.png";
import GoogleButton from "react-google-button";
import InputAdornment from "@mui/material/InputAdornment";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { useAppDispatch } from "../hooks/hooks";
import { setUser, userName, userEmail } from "../reducers/userSlice";
interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

function Login() {
  const dispatch = useAppDispatch();
  const [userData, setUserdata] = useState({
    email: "",
    name: "",
  });
  const [values, setValues] = React.useState<State>({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  let history = useNavigate();
  return (
    <div className="login">
      <img src={Logo} style={{ width: "5rem" }} />
      <h1>Travellers</h1>
      <p>Travel community app</p>
      <div className="login__inner">
        <TextField
          id="outlined-name"
          label="Email"
          
          onChange={(ev: any) => {
            setUserdata({ ...userData, email: ev.target.value });
          }}
          style={{
            width: "90%",
            border: "1px solid",
            borderRadius: "0.3rem",
            color: "#ff4500",
            opacity: "0.6",
            
          }}
          InputLabelProps={{ style: { color: "#ff4500" } }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" style={{ color: "black" }}>
                <EmailIcon style={{ color: "#ff4500" }} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="outlined-uncontrolled"
          label="Password"
          type={values.showPassword ? "text" : "password"}
          onChange={(ev: any) => {
            setUserdata({ ...userData, name: ev.target.value });
          }}
          style={{
            width: "90%",
            margin: "1rem",
            border: "1px solid",
            opacity: "0.6",
            borderRadius: "0.3rem",
            color: "#ff4500",
          }}
          InputLabelProps={{ style: { color: "#ff4500" } }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  style={{ color: "#ff4500" }}
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className="contact-us-div">
        <div className="contact-us">Don't have an account?</div>
        <a href="/mainpage">Contact us</a>
      </div>
<<<<<<< HEAD
      <button
        onClick={() => {
          console.log("clicked");
          history("/mainpage");
        }}
      >
        <div>Log In</div>
      </button>
=======
      <div className="buttons">
        <GoogleButton
          style={{
            margin: "auto",
            width: "50vw",
            textAlign: "center",
            borderRadius: "0.3rem",
          }}
        />
        <button
          onClick={() => {
            console.log("clicked");
            dispatch(setUser(userData));
            history("/mainpage");
          }}
        >
          Log In
        </button>
      </div>
>>>>>>> origin/Aiman
    </div>
  );
}
export default Login;
