import { useEffect, useState } from 'react';
import './Login.scss';
import '../MainTemplate/MainTemplate';
import logo from "../../logoAndPhotos/ibring.jpg";
import { useNavigate } from 'react-router-dom';
import { logintAsync } from '../../../features/userLogin/userLoginReducer';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

import { Link } from "react-router-dom";

function Login() {
    const userLogin = useAppSelector(state => state.logged);
    const dispatch = useAppDispatch();
    const { value } = userLogin;
    const nav = useNavigate();

    useEffect(() => {
        if (userLogin.status === "logged") {
            nav('/home');
        }
    }, [value])

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    function handleEmailPassLogin(e: any) {
        e.preventDefault();
        console.log({ email })
        console.log({ pass })

        dispatch(logintAsync({ email: email, pass: pass }));
    }

    return (
        <div className="mainTemplate">
            <div className="mainHeader">
                <img className='registerLogo' src={logo} alt="" />
            </div>
            <div className="mainContent">
                <label className="templateTitle signUpTitle">let's sign in</label>

                <form onSubmit={handleEmailPassLogin} className='loginWithEmailAndPass' >
                    <input className='templateInput EmailRegistered' placeholder="Email" type="email" required onKeyUp={(ev: any) => { setEmail(ev.target.value) }} />
                    <input className='templateInput passRegistered' placeholder="Password" type="password" required onKeyUp={(ev: any) => { setPass(ev.target.value) }} />
                    <label className='haveAccount'>Have no account! <span><Link to="/register">Sign up here</Link></span></label>
                    <input className='templateButton signUpButton' type="submit" value="Login" />
                </form>

                {userLogin.status === 'loading' ?
                    <div className='loading'>
                        <p>Loading</p>
                    </div> :
                    userLogin.status === 'failed' ?
                        <div className='loading'>
                            <p>Failed</p>
                        </div> : null
                        // <div className='loading'>
                        //     <p></p>
                        // </div>
                }
            </div>
        </div>
    );
}

export default Login;