
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LoginIcon from '@mui/icons-material/Login';
import GoogleIcon from '@mui/icons-material/Google';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
// import './signin2.scss';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import ReactDOM from 'react-dom';
//import Admin from '../admin/admin';


function SignIn2() {
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);

  const onLoginSuccess = (res:any) => {
    console.log('Login Success:', res.profileObj);
    setShowloginButton(false);
    setShowlogoutButton(true);
};

const onLoginFailure = (res:any) => {
    console.log('Login Failed:', res);
};

const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
};
const responseGoogle = (response:any
  ) => {
  console.log(response);
}

  return (
    <div className='signin'>
        <TextField
          className="textfield"
          autoComplete="given-name"
          name="Email"
          required
          fullWidth
          id="Email"
          label="Email"
          autoFocus
        />
        <TextField
          className="textfield"
          autoComplete="given-name"
          name="passowrd"
          required
          fullWidth
          id="passowrd"
          label="Password"
          autoFocus
        />
      <br /><br />
      <button> forgot password?  </button>
      <br /><br />
      <Button className='btn' size="small" variant="outlined" startIcon={<GoogleIcon />}> Google</Button>
 
      <Link to={`/`}>
        <Button className='btn' size="small" variant="outlined" startIcon={<LoginIcon />}> login </Button>
      </Link>
      <br></br>
    </div>

  );
}

export default SignIn2;