import './SignUp.scss';
import { CssTextField } from '../../../App';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { Link } from 'react-router-dom';
import background from '../../images/background.jpg';
import logo from '../../images/logo.jpg';
import { useNavigate } from "react-router";

export default function SignUp() {
    let navigate = useNavigate();

    function handleSignUp(ev:any){
        ev.preventDefault();
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
                            size="small" />
                        <br />
                        <br />
                        <CssTextField label="Password" focused
                            required
                            id="custom-css-outlined-password-input"
                            type='password'
                            defaultValue=""
                            size="small" /> 
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