import './ResetPassword.scss';
import { Box } from "@mui/material";
import { CssTextField } from '../../../App';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { Link } from 'react-router-dom';
import background from '../../images/background.jpg';
import logo from '../../images/logo.jpg';

export default function ResetPassword() {
    return (
        <div className="reset">
            <img className="image" src={background} alt="" />
            <div className="Box">
                <Link to='/'>
                    <ArrowBackSharpIcon />
                </Link>
                <div className="content">
                    <img className="logo" src={logo} alt="" />
                    <h1>Reset Your Password</h1>
                    <Box component="form" sx={{ '& .MuiTextField-root': { m: 1 }, }}>
                        <CssTextField label="E-mail Address" focused
                            id="custom-css-outlined-input"
                            defaultValue=""
                            size="small" />
                        <CssTextField label="New Password" focused
                            id="custom-css-outlined-input"
                            defaultValue=""
                            size="small" />
                        <CssTextField label="Confirm Password" focused
                            id="custom-css-outlined-input"
                            defaultValue=""
                            size="small" />
                        <br />
                        <br />
                        <Link to='/'>
                            <button type="submit">Reset</button>
                        </Link>
                    </ Box>
                </div>
            </div>
        </div>
    );
}