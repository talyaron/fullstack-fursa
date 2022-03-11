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
    // userInfo => {name, email, password, phone} => necessary information about the user
    const [userInfo, setUserInfo] = useState({name:'', email:'',password:'',phone:''});
    const [isMatch, setIsMatch] = useState(true);

    async function handleSignUp(ev:any){
        ev.preventDefault();
        if(isMatch){
            const results = await axios.post('/user/register', userInfo)
            if(results.data === 'user saved')
                navigate('/');
            else {
                alert(results.data);
            }
        }
    }

    function handleCheckPassword(ev : any){
        if(userInfo.password !== ev.target.value)
            setIsMatch(false);
        else setIsMatch(true);
    }

    function handleValidateEmail(ev:any){
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
        if(!ev.target.value.match(mailformat)){
            alert("You have entered an invalid email address!");
        }
    }

    function handleCheckPhone(ev:any){
        const phoneno = /^\05?([0-9]{1})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(!ev.target.value.match(phoneno)){
            alert("You have entered an invalid phone number!");
        }
    }

    return (
        <div className="signUp">
            <img className="image" src={background} alt="" />
            <div className="SignUpBox">
                <Link to='/'>
                    <ArrowBackSharpIcon sx={{paddingTop:'5px', fontSize:30}}/>
                </Link>
                <div className="content">
                    <img className="logo" src={logo} alt="" />
                    <h1>Create Your Account</h1>
                    <form onSubmit={handleSignUp}>
                        <CssTextField label="Name" focused
                            required
                            id="custom-css-outlined-name-input"
                            defaultValue=""
                            size="small" onChange={(e) => setUserInfo({...userInfo, name : e.target.value})}/>
                        <br />
                        <br />
                        <CssTextField label="E-mail Address" focused
                            required
                            id="custom-css-outlined-email-input"
                            defaultValue=""
                            size="small" onChange={(e) => setUserInfo({...userInfo, email : e.target.value})}
                            onBlur={handleValidateEmail} />
                        <br />
                        <br />
                        <CssTextField label="Password" focused
                            required
                            id="custom-css-outlined-password-input"
                            type='password'
                            defaultValue=""
                            size="small" onChange={(e) => setUserInfo({...userInfo, password : e.target.value})}/> 
                        <br />
                        <br />
                        <CssTextField label="Confirm Password" focused
                            required
                            id="custom-css-outlined-confirm-input"
                            type='password'
                            defaultValue=""
                            size="small" onBlur={handleCheckPassword}/>
                        <br />
                        <br />
                        <CssTextField label="Phone Number" focused
                            required
                            id="custom-css-outlined-phone-input"
                            defaultValue=""
                            size="small" onChange={(e) => setUserInfo({...userInfo, phone : e.target.value})}
                            onBlur={handleCheckPhone} />
                        <br />
                        <br hidden={!isMatch}/>
                        <p hidden={isMatch}>Please make sure your passwords match</p>
                        <button type="submit">Sign Up</button>
                        <p></p>
                    </form>
                </div>
            </div>
        </div>
    );
}
