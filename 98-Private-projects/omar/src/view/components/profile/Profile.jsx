import './Profile.scss';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LoginIcon from '@mui/icons-material/Login';
import GoogleIcon from '@mui/icons-material/Google';
import BarChartIcon from '@mui/icons-material/BarChart';
import React, {useState} from "react"
import { Link } from 'react-router-dom';

function ProfileButton() {
    return (
      <div className="signUpField">
        <Link className="linkStyle" to="/Gmail">
          <Button
            sx={{
              width: 400,
              fontSize:20
            }}
            size="large"
            variant="outlined"
            startIcon={<GoogleIcon />}
          >
            {" "}
            Sign Up with Google
          </Button>
        </Link>
        <br></br>
        <br></br>
        <Link className="linkStyle" to="/facebook">
          <Button
            sx={{
              width: 400,
              fontSize:20
            }}
            size="large"
            variant="outlined"
            startIcon={<FacebookOutlinedIcon />}
          >
            {" "}
            Sign Up with Facebook
          </Button>
        </Link>
        <br></br>
        <br></br>
        <Link className="linkStyle" to="/login">
          <Button
            sx={{
              width: 400,
              fontSize:16
            }}
            size="large"
            variant="outlined"
            startIcon={<LoginIcon />}
          >
            {" "}
            Allready have account ? login !{" "}
          </Button>
        </Link>
        <br></br>
        <br></br>
        {/* <Dial />  */}
        {/* <div className='Tab'> 
            <Button  size="large" variant="contained" startIcon={<FitnessCenterIcon/>}> Plan &emsp;</Button> 
                <Button  size="large" variant="contained" startIcon={<BarChartIcon/>}> &emsp;Charts</Button>
                <Button  size="large" variant="contained" startIcon={<AccountCircleIcon/>}> &emsp;profile</Button>
            
            </div> */}

        <div></div>
      </div>
    );
  }

  export default ProfileButton;