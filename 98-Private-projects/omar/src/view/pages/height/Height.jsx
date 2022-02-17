import React from 'react'
import Back from '../../components/Back/BackButton'
import { Link } from 'react-router-dom';
import Dialog from '../../components/dialog/Dialog'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import FirstTemplate from '../../components/firstTemplate/FirstTemplate'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import HeightIcon from '@mui/icons-material/Height';
function Height() {
  return (
    <div>
      <Link className="linkStyle" to="/Age">
        <Back />
      </Link>
      <FirstTemplate />
      <div className="center">
        <p className="underTilte">Your height ? </p>
        <ButtonGroup disableElevation variant="contained">
        <Dialog title={"CM"} />
        <Dialog title={"FT"} />
        </ButtonGroup>
        <TextField
          focused
          sx={{
            width: 350,
          }}
          label="Height"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <HeightIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <Link className="linkStyle" to="/Weight">
          <Dialog title={"next"} />
        </Link>
      </div>
    </div>
  );
}

export default Height
