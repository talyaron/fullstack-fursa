import './SignUp.scss';
import { CssTextField } from '../../../App';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { Link } from 'react-router-dom';
import background from '../../images/background.jpg';
import logo from '../../images/logo.jpg';
import { useNavigate } from "react-router";
import axios from "axios";
import { useState } from 'react';

export default function SignUp() {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSignUp(ev:any){
        ev.preventDefault();
        const results = await axios.post('/userRecipes/register',{email, password})
        console.log(results.data)

        navigate('/');
    }

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
                    {/* <Box component="form" sx={{ '& .MuiTextField-root': { m: 1 }, }}> */}
                    <form onSubmit={handleSignUp}>
                        <CssTextField label="Name" focused
                            required
                            id="custom-css-outlined-name-input"
                            defaultValue=""
                            size="small" />
                        <br />
                        <br />
                        <CssTextField label="E-mail Address" focused
                            required
                            id="custom-css-outlined-email-input"
                            defaultValue=""
                            size="small" onChange={(e) => setEmail(e.target.value)}
                            />
                        <br />
                        <br />
                        <CssTextField label="Password" focused
                            required
                            id="custom-css-outlined-password-input"
                            type='password'
                            defaultValue=""
                            size="small" onChange={(e) => setPassword(e.target.value)}/> 
                        <br />
                        <br />
                        <CssTextField label="Confirm Password" focused
                            required
                            id="custom-css-outlined-confirm-input"
                            type='password'
                            defaultValue=""
                            size="small" />
                        <br />
                        <br />
                        <CssTextField label="Phone Number" focused
                            required
                            id="custom-css-outlined-phone-input"
                            defaultValue=""
                            size="small" />
                        <br />
                        <br />
                        {/* <Link to='/'> */}
                        <button type="submit">Sign Up</button>
                        {/* </Link> */}
                    </form>
                    {/* </ Box> */}
                </div>
            </div>
        </div>
    );
}