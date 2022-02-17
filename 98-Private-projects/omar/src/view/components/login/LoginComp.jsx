import React from 'react'
import './LoginComp.scss'
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';
// import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
// import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import Back from '../../components/Back/BackButton'
function login() {

  
  return (
    <div className="login">
       <Link className="linkStyle" to="/">
        <Back />
      </Link>
      <TextField
        sx={{
          width: 350,
        }}
        label="Email"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="filled"
      />
      <TextField
        sx={{
          width: 350,
        }}
        label="password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <VisibilityIcon />
            </InputAdornment>
          ),
        }}
        variant="filled"
      />
      <Button sx={{ fontSize: 20 }} size="small" variant="filled">
        {" "}
        forgot your paswword ?
      </Button>
      <Link className="linkStyle" to="/gender">
        <Button
          sx={{ fontSize: 20, width: 200 }}
          size="large"
          variant="outlined"
          startIcon={<LoginIcon />}
        >
          {" "}
          Log in
        </Button>
      </Link>
    </div>
  );
}

export default login

