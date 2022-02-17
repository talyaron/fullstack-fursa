import { useEffect, useState } from 'react';
import './Login.scss';
import '../MainTemplate/MainTemplate';
import logo from "../../logoAndPhotos/ibring.jpg";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from '../../../actions/Actions';

interface actionIF {
    type: string;
    payload: boolean;
}

interface userIF {
    email: string;
    pass: string;
}

interface payloadIF {
    status: boolean;
    user?: object;
}

function Login() {
    const loggedReducer = useSelector<any>(state => state.loggedReducer);
    const dispatch = useDispatch();
    const [allUsers, setAllUsers] = useState<Array<userIF>>([]);
    const [user, setUser] = useState<userIF>();
    useEffect(() => {
        console.log({ "Logged": loggedReducer });
    }, [loggedReducer]);

    function LoginFetch() {
        return new Promise((resolve, reject) => {
            fetch('/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email.toLowerCase(), pass: pass })
            }).then(r => r.json())
                .then(data => {
                    if (data.ok) {
                        setUser(data.user);
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                })
                .catch(err => reject(err))
        })
    }

    const nav = useNavigate();

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    function handleEmailPassLogin(e: any) {
        e.preventDefault();
        console.log({ email })
        console.log({ pass })

        LoginFetch()
            .then((json) => {
                console.log("isUer:", json);
                if (json) {
                    const _user: payloadIF = {
                        status: true,
                        user: { email: email }
                    }

                    dispatch(signIn(_user));

                    nav('/greetings');
                } else {
                    console.log("user doesn't exists!");
                }
            })
            .catch((err) => {
                console.error(err);
            });
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
                    <label className='haveAccount'>Have no account! <span>Sign up here</span></label>
                    <input className='templateButton signUpButton' type="submit" value="Login" />
                </form>
            </div>
        </div>
    );
}

export default Login;