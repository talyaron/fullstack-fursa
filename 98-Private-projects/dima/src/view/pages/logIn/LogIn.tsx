import './LogIn.scss';
import { styled } from '@mui/material/styles';
import { Box, TextField } from "@mui/material";
import { Link } from 'react-router-dom';
import { CssTextField } from '../../../App';
import background from '../../background.jpg';
import logo from '../../logo.jpg';

function LogIn() {

    return (
        <div className="wrapper">
            <img className="image" src={background} alt="" />
            <div className='LogInBox'>
                <img className="logo" src={logo} alt="" />
                <h1>Welcome <br /> to Recipes App</h1>
                <h3>Sign In</h3>
                <Box component="form" sx={{ '& .MuiTextField-root': { m: 1 }, }}>
                    <CssTextField label="E-mail Address" focused
                        id="custom-css-outlined-input"
                        defaultValue=""
                        size="small" />
                    <CssTextField label="Password" focused
                        id="custom-css-outlined-input"
                        defaultValue=""
                        size="small" />
                    <br />
                    <br />
                    <Link to='MainScreen'>
                        <button type="submit">Log In</button>
                    </Link>
                </Box>
                <br/>
                <Link to='ResetPassword'>Forget Password ?</Link>
                <p>New in Recipes App ? <Link to='SignUp'><span>Sign Up Now</span></Link></p>
            </div>
        </div >
    );
}

export default LogIn;