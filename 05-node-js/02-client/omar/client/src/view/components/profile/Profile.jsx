import './Profile.scss';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LoginIcon from '@mui/icons-material/Login';
import GoogleIcon from '@mui/icons-material/Google';
import BarChartIcon from '@mui/icons-material/BarChart';
import React, {useState} from "react"
import Dialog from '../dialog/Dialog'
import Dial from '../dial/Dial'

function ProfileButton() {
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const onConfirm1 = ()=>{
        console.log("google!");
    }
    const onConfirm2 = ()=>{
        console.log("facebook!");
    }




    return (
        <div className = 'signUpField'> 
        

            <Button size="large" variant="outlined"  onClick={() => setOpen(true)} startIcon={<GoogleIcon/>}> Sign Up with Google</Button>
            <Dialog open={open} handleClose={() => setOpen(false)} title={"Warning!!"} content={"You are going to sign up with google!"} onConfirm={onConfirm1}/>
            <br></br>
            <br></br>
            <Button size="large" variant="outlined" onClick={() => setOpen2(true)} startIcon={<FacebookOutlinedIcon/>}> Sign Up with Facebook</Button>
            <Dialog open={open2} handleClose={() => setOpen2(false)} title={"Warning!!"} content ={"You are going to sign up with Facebook!"} onConfirm={onConfirm2}/>
            <br></br>
            <br></br>
            <Button size="large" variant="outlined" startIcon={<LoginIcon/>}> Allready have account ? login ! </Button>
            {/* <br></br>
            <br></br> */}
            <Dial /> 
            <div className = 'profileButton'> 
                <Button size="large" variant="contained" startIcon={<FitnessCenterIcon/>}> Plan</Button>
                <Button  size="large" variant="contained" startIcon={<BarChartIcon/>}> Charts</Button>
                <Button size="large" variant="contained" startIcon={<AccountCircleIcon/>}> profile</Button>
            </div>
        </div>
        
    );
  }

  export default ProfileButton;