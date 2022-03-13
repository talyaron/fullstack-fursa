
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LoginIcon from '@mui/icons-material/Login';
import GoogleIcon from '@mui/icons-material/Google';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import './signin.scss';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


//import Admin from '../admin/admin';

const clientId = "Your-Client-Id";

function SignIn() {
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const navigate=useNavigate();


  async function handleSignIn(ev:any){
    ev.preventDefault();
    const form = ev.target;
    // console.log({form})
    const email2=form[0].value;
  await axios.post('/user/login', {email: form[0].value,password: form[2].value})
      .then(data => {
        console.log({email2})
        console.log(data);
        if(email2==="Admin@gmail.com"){
          console.log("fat 3l if")
          navigate('/admincourses');
        }
        else{
        navigate('/homepage');}
      }).catch(err => {
        console.error(err);
      })

  }


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
      {/* <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwQXPGGUkeJfNF9_zBIWGlYeatiFav_Cemw&usqp=CAU" alt="" /> */}
      {/* <Typography component="h5" variant="h5">
        Sign in
      </Typography> */}
       <Avatar className='avatar'>
        <LockOutlinedIcon />
      </Avatar>
      <form onSubmit={handleSignIn}>
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
          type="password"
        />
     
      <br /><br />
      <Button className='btn' size="small" variant="outlined" startIcon={<GoogleIcon />}> Google</Button>

      <br></br><br></br>
      {/* <Link to={`/`}> */}
        <Button  type='submit' className='btn' size="small" variant="outlined" startIcon={<LoginIcon />}> login </Button>
      {/* </Link> */}
      <br></br>
      </form>


   {/* //   onClick={handleSignIn} */}


    </div>

  );
}

export default SignIn;