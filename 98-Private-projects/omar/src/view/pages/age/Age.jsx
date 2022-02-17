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
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import InputAdornment from '@mui/material/InputAdornment';


function Age() {
  return (
    <div>
      <Link className="linkStyle" to="/Name">
        <Back />
      </Link>
      <FirstTemplate />

      <div className="center">
        <p className="underTilte">How old are you ? </p>
        <TextField
        focused
        sx={{
          width: 350,
        }}
        label="Age"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CalendarTodayIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
        <Link className="linkStyle" to="/Height">
          <Dialog  title={"next"}/>
        </Link>
      </div>
    </div>
  );
}

export default Age
