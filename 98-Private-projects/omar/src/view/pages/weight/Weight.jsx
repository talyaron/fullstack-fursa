import React from 'react'
import Back from '../../components/Back/BackButton'
import { Link } from 'react-router-dom';
import Dialog from '../../components/dialog/Dialog'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import FirstTemplate from '../../components/firstTemplate/FirstTemplate'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
function Weight() {
  return (
    <div>
      <Link className="linkStyle" to="/Height">
        <Back />
      </Link>
      <FirstTemplate />
      <div className="center">
        <p className="underTilte">Your current weight ? </p>
        <ButtonGroup disableElevation variant="contained">
        <Dialog title={"KG"} />
        <Dialog title={"LBS"} />
        </ButtonGroup>
        <TextField
          focused
          sx={{
            width: 350,
          }}
          label="Weight"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MonitorWeightIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <Link className="linkStyle" to="/Plan">
          <Dialog title={"next"} />
        </Link>
      </div>
    </div>
  );
}

export default Weight
