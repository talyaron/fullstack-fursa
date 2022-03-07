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

function SignUp(){

    return(
        <div className="signup">

<Avatar className='avatar'>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h3" variant="h5" className="typ">
            Sign up
          </Typography>
       
            {/* <h2>Sign Up</h2> */}
{/* <Grid> */}

<form className="signupform">

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
                  label="Email"
                  autoFocus
                />
              
        {/* </Grid> */}
<br />
<br />
<Link to={`/signIn`}>
   <button className='subbtn'>submit</button>
   </Link>
   </form>
</div>
        
    );

}

export default SignUp;