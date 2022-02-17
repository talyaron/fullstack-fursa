
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LoginIcon from '@mui/icons-material/Login';
import GoogleIcon from '@mui/icons-material/Google';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Link } from "react-router-dom";
import './index.scss';

function SignIn() {
    return (
        <div className = 'signin'> 
        <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwQXPGGUkeJfNF9_zBIWGlYeatiFav_Cemw&usqp=CAU" alt="" />
        <p>Email</p>
        <input type="text" />
        <p>Password</p>
        <input type="text" />
        <br /><br />
            <Button size="small" variant="outlined" startIcon={<GoogleIcon/>}> Sign Up with Google</Button>
            <br></br>
            <br></br>
            <Button size="small" variant="outlined" startIcon={<FacebookOutlinedIcon/>}> Sign Up with Facebook</Button>
            <br></br>
            <br></br>
            <Link to={`/homepage`}>
            <Button size="small" variant="outlined" startIcon={<LoginIcon/>}> login </Button>
            </Link>
            <br></br>
            <br></br>
            <div className = 'signin'> 
                {/* <Button size="medium" variant="contained" startIcon={<FitnessCenterIcon/>}> Plan</Button> */}
                {/* <Button  size="small" variant="contained" startIcon={<BarChartIcon/>}> Charts</Button>
                <Button size="small" variant="contained" startIcon={<AccountCircleIcon/>}> profile</Button> */}
            </div>
        </div>
        
    );
  }

  export default SignIn;