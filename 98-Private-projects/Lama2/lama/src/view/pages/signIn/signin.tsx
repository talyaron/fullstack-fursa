
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LoginIcon from '@mui/icons-material/Login';
import GoogleIcon from '@mui/icons-material/Google';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './signin.scss';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import ReactDOM from 'react-dom';

const clientId = "Your-Client-Id";

function SignIn() {
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
      <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwQXPGGUkeJfNF9_zBIWGlYeatiFav_Cemw&usqp=CAU" alt="" />
      {/* <Typography component="h5" variant="h5">
        Sign in
      </Typography> */}
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
      <Button className='btn' size="small" variant="outlined" startIcon={<GoogleIcon />}> Google</Button>
      <br></br>
      <br></br>

      <Link to={`/admincourses`}>
        <Button className='btn' size="small" variant="outlined" startIcon={<LoginIcon />}> admin </Button>
      </Link>
      <br></br><br></br>
      <Link to={`/`}>
        <Button className='btn' size="small" variant="outlined" startIcon={<LoginIcon />}> login </Button>
      </Link>
      <br></br>


      {/* { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            } */}


    </div>

  );
}

export default SignIn;