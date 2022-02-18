import './LogIn.scss';
import { styled } from '@mui/material/styles';
import { Box, TextField } from "@mui/material";
import { Link } from 'react-router-dom';
import { CssTextField } from '../../../App';

function LogIn() {

    return (
        <div className="wrapper">
            <img className="image" src="https://img.freepik.com/free-photo/purple-marble-texture-natural-pattern-with-high-resolution-background-design-art-work_38607-277.jpg?w=996" alt="" />
            <div className='LogInBox'>
                <img className="logo" src="https://i.etsystatic.com/25426477/c/1724/1370/88/206/il/33fb1e/3155023191/il_340x270.3155023191_710b.jpg" alt="" />
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