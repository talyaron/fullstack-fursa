import { Link } from "react-router-dom";
import './signup.scss';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function SignUp() {
  const navigate=useNavigate();


  function handleSignUp(ev:any){
  
  ev.preventDefault();
  const form = ev.target;
  console.log({form})
  axios.post('/user/add-new-user', {firstName: form[0].value,lastName: form[2].value ,email: form[4].value, password: form[6].value,phoneNumber: form[8].value})
    .then(data => {
      console.log(data);
      navigate('/signIn');
      
    }).catch(err => {
      console.error(err);
    })
  }

  return (
    <div className="signup">

  
      <Typography component="h3" variant="h5" className="typ">
        Sign up
      </Typography>
      {/* className="signupform" */}
      <form  onSubmit={handleSignUp} className="signupform">

        <TextField
          className="textfield"
          autoComplete="given-name"
          name="firstName"
          required
          fullWidth
          id="firstName"
          label="First Name"
          autoFocus
        />
        <TextField
          className="textfield"
          autoComplete="given-name"
          name="lastName"
          required
          fullWidth
          id="lastName"
          label="Last Name"
          autoFocus
        />
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
   
               <TextField
          className="textfield"
          autoComplete="given-name"
          name="phone_number"
          required
          fullWidth
          id="phone_number"
          label="phone number"
          autoFocus
        />

        {/* </Grid> */}
        <br />
        <br />
        {/* <Link to={`/signIn`}> */}
          <button className='subbtn' type='submit'>submit</button>
        {/* </Link> */}
      </form>
    </div>

  );

}

export default SignUp;