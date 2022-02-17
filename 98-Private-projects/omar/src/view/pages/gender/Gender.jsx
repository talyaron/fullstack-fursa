import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import TransgenderIcon from '@mui/icons-material/Transgender';
import Back from '../../components/Back/BackButton'
import LogoImg from '../../components/image/Image'
import FirstTemplate from '../../components/firstTemplate/FirstTemplate'
import Dialog from '../../components/dialog/Dialog'
import './Gender.scss';

function ChangeColor(color) {
  
  this.style.backgroundColor = color;
  console.log(color)
}

function Gender() {
  return (
    <div>
      <Link className="linkStyle" to="/">
        <Back />
      </Link>
      <FirstTemplate />

      <div className="center">
        <p className="underTilte">What's your gender ? </p>
        <Button
        onClick={() => { this.style.backgroundColor = 'green' }}
          sx={{
            width: 300,
            fontSize:20
          }}
          size="large"
          variant="contained"
          startIcon={<MaleIcon />}
        >
          {" "}
          Male
        </Button>
        <Button
          sx={{
            width: 300,
            fontSize:20
          }}
          size="large"
          variant="contained"
          startIcon={<FemaleIcon />}
        >
          {" "}
          Female
        </Button>
        <Button
        sx={{
          width: 300,
          fontSize:20
        }}
          size="large"
          variant="contained"
          startIcon={<TransgenderIcon />}
        >
          {" "}
          Other
        </Button>
        <Link className="linkStyle" to="/Goal">
          <Dialog title={'next'}/>
        </Link>
      </div>
    </div>
  );
}

export default Gender
