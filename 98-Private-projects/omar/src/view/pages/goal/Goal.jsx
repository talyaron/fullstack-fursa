import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import ConstructionIcon from '@mui/icons-material/Construction';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Back from '../../components/Back/BackButton'
import LogoImg from '../../components/image/Image'
import FirstTemplate from '../../components/firstTemplate/FirstTemplate'
import Dialog from '../../components/dialog/Dialog'
import './Goal.scss'

function Goal() {
  return (
    <div>
      <Link className="linkStyle" to="/Gender">
        <Back />
      </Link>
      <FirstTemplate />

      <div className="center">
        <p className="underTilte">What's your main goal ? </p>
        
        <Button
          title =''
          sx={{
            width: 300,
            fontSize: 20,
          }}
          size="large"
          variant="contained"
          startIcon={<MonitorWeightIcon />}
        >
          
          Losing weight
        </Button>
        <Button
          sx={{
            width: 300,
            fontSize: 20,
          }}
          size="large"
          variant="contained"
          startIcon={<ConstructionIcon />}
        >
          {" "}
          Build Muscle
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
          Keep Fit
        </Button>
        {/* <Dialog title={"keep fit"}/> */}
        <Link className="linkStyle" to="/Activity">
          <Dialog  sx={{
            width: 300,
            fontSize: 20,
          }} title={'Next'}/>
        </Link>
      </div>
    </div>
  );
}

export default Goal
