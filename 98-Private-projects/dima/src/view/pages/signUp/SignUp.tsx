import { Box } from "@mui/material";
import './SignUp.scss';
import { CssTextField } from '../../../App';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { Link } from 'react-router-dom';
import background from '../../images/background.jpg';
import logo from '../../images/logo.jpg';

export default function SignUp() {

    return (
        <div className="signUp">
            <img className="image" src={background} alt="" />
            <div className="SignUpBox">
                <Link to='/'>
                    <ArrowBackSharpIcon />
                </Link>
                <div className="content">
                    <img className="logo" src={logo} alt="" />
                    <h1>Create Your Account</h1>
                    <Box component="form" sx={{ '& .MuiTextField-root': { m: 1 }, }}>
                        <CssTextField label="Name" focused
                            id="custom-css-outlined-input"
                            defaultValue=""
                            size="small" />
                        <CssTextField label="E-mail Address" focused
                            id="custom-css-outlined-input"
                            defaultValue=""
                            size="small" />
                        <CssTextField label="Password" focused
                            id="custom-css-outlined-input"
                            defaultValue=""
                            size="small" />
                        <CssTextField label="Confirm Password" focused
                            id="custom-css-outlined-input"
                            defaultValue=""
                            size="small" />
                        <CssTextField label="Phone Number" focused
                            id="custom-css-outlined-input"
                            defaultValue=""
                            size="small" />
                        <br />
                        <br />
                        <Link to='/'>
                            <button type="submit">Sign Up</button>
                        </Link>
                    </ Box>
                </div>
            </div>
        </div>
    );
}