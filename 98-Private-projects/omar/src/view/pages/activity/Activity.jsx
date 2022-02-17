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
import './Activity.scss'

function Activity() {
  return (
    <div>
      <Link className="linkStyle" to="/Goal">
        <Back />
      </Link>
      <FirstTemplate />

      <div className="center">
        <p className="underTilte">Which activities do you prefer ? </p>
        <Button
          sx={{
            width: 300,
            fontSize: 20,
          }}
          size="large"
          variant="contained"
          startIcon={<HomeIcon />}
        >
          {" "}
          Fitness at Home
        </Button>
        <Button
          sx={{
            width: 300,
            fontSize: 20,
          }}
          size="large"
          variant="contained"
          startIcon={<FitnessCenterIcon />}
        >
          {" "}
          Fitness at Gym
        </Button>
        <Button
          sx={{
            width: 300,
            fontSize: 20,
          }}
          size="large"
          variant="contained"
          startIcon={<DirectionsRunIcon />}
        >
          {" "}
          running
        </Button>
        <Link className="linkStyle" to="/Name">
          <Dialog title={'next'}/>
        </Link>
      </div>
    </div>
  );
}

export default Activity
