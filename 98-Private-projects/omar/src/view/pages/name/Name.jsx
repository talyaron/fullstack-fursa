import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import Back from '../../components/Back/BackButton'
import LogoImg from '../../components/image/Image'
import FirstTemplate from '../../components/firstTemplate/FirstTemplate'
import Dialog from '../../components/dialog/Dialog'
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';


function Activity() {
  return (
    <div>
      <Link className="linkStyle" to="/Activity">
        <Back />
      </Link>
      <FirstTemplate />

      <div className="center">
        <p className="underTilte">What's your name ? </p>
        <TextField
        focused
        sx={{
          width: 350,
        }}
        label="Name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
        <Link className="linkStyle" to="/Age">
          <Dialog title={"Next"}/>
        </Link>
      </div>
    </div>
  );
}

export default Activity
