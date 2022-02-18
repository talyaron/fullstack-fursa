import './ResetPassword.scss';
import { Box } from "@mui/material";
import { CssTextField } from '../../../App';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { Link } from 'react-router-dom';

export default function ResetPassword() {
    return (
        <div className="wrapper">
            <img className="image" src="https://img.freepik.com/free-photo/purple-marble-texture-natural-pattern-with-high-resolution-background-design-art-work_38607-277.jpg?w=996" alt="" />
            <div className="Box">
                <Link to='/'>
                    <ArrowBackSharpIcon />
                </Link>
                <div className="content">
                    <img className="logo" src="https://i.etsystatic.com/25426477/c/1724/1370/88/206/il/33fb1e/3155023191/il_340x270.3155023191_710b.jpg" alt="" />
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