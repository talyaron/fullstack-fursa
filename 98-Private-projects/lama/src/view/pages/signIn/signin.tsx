
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LoginIcon from '@mui/icons-material/Login';
import GoogleIcon from '@mui/icons-material/Google';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Link } from "react-router-dom";
import './signin.scss';
import Typography from '@mui/material/Typography';

function SignIn() {
    return (
        <div className = 'signin'> 
        <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwQXPGGUkeJfNF9_zBIWGlYeatiFav_Cemw&usqp=CAU" alt="" />
        <Typography component="h2" variant="h5">
            Sign in
          </Typography>
        <p>Email</p>
        <input type="text" />
        <p>Password</p>
        <input type="text" />
        <br /><br />
            <Button  className='btn' size="small" variant="outlined" startIcon={<GoogleIcon/>}> Google</Button>
            <br></br>
            <br></br>
            {/* <Button className='btn' size="small" variant="outlined" startIcon={<FacebookOutlinedIcon/>}> Sign Up with Facebook</Button>
            <br></br>
            <br></br> */}
                   
            <Link to={`/adminpage`}>
            <Button className='btn' size="small" variant="outlined" startIcon={<LoginIcon/>}> admin </Button>
            </Link>
            <br></br>
            <Link to={`/`}>
            <Button className='btn' size="small" variant="outlined" startIcon={<LoginIcon/>}> login </Button>
            </Link>
            <br></br>
        
         
        </div>
        
    );
  }

  export default SignIn;