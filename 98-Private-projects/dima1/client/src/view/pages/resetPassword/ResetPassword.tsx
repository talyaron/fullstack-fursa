import './ResetPassword.scss';
import { CssTextField } from '../../../App';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { Link } from 'react-router-dom';
import background from '../../images/background.jpg';
import logo from '../../images/logo.jpg';
import { useNavigate } from "react-router";
import { useState } from 'react';
import axios from 'axios';

export default function ResetPassword() {
    let navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({email:'',password:''});
    const [isMatch, setIsMatch] = useState(true);

    async function handleReset(ev:any){
        ev.preventDefault();
        if(isMatch){
            const result = await axios.patch('/user/reset-password', userInfo);
            console.log(result)
            if(result.data === 'reset')
                navigate('/');
            else alert(result.data);
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

    return (
        <div className="reset">
            <img className="image" src={background} alt="" />
            <div className="Box">
                <Link to='/'>
                    <ArrowBackSharpIcon sx={{paddingTop:'7px', fontSize:30}}/>
                </Link>
                <div className="content">
                    <img className="logo" src={logo} alt="" />
                    <h1>Reset Your Password</h1>
                    <br />
                    <form onSubmit={handleReset}>
                        <CssTextField label="E-mail Address" focused
                            required
                            id="custom-css-outlined-email-input"
                            defaultValue=""
                            size="small" 
                            onChange={(e) => setUserInfo({...userInfo, email : e.target.value})}
                            onBlur={handleValidateEmail}/>
                        <br />
                        <br />
                        <CssTextField label="New Password" focused
                            required
                            id="custom-css-outlined-password-input"
                            type='password'
                            defaultValue=""
                            size="small" 
                            onChange={(e) => setUserInfo({...userInfo, password : e.target.value})}/>
                        <br />
                        <br />
                        <CssTextField label="Confirm Password" focused
                            required
                            id="custom-css-outlined-confirm-input"
                            type='password'
                            defaultValue=""
                            size="small" onBlur={handleCheckPassword}/>
                        <br />
                        <br hidden={!isMatch}/>
                        <p hidden={isMatch}>Please make sure your passwords match</p>
                        <button type="submit">Reset</button>
                        <p></p>
                        <p></p>
                    </form>
                </div>
            </div>
        </div>
    );
}
