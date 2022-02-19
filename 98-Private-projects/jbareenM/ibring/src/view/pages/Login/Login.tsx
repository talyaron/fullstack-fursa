import { useEffect, useState } from 'react';
import './Login.scss';
import '../MainTemplate/MainTemplate';
import logo from "../../logoAndPhotos/ibring.jpg";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from '../../../actions/Actions';

import { LoginFetch } from '../../../redux';
import { RootState } from '../../../redux/store';
import { UserState } from '../../../redux/reducers/userReducer';

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

// function Login(props: any) {
function Login() {
    const userLogin = useSelector<RootState, UserState>(state => state.user);
    const dispatch = useDispatch();

    const { userInfo } = userLogin;
    const nav = useNavigate();

    useEffect(() => {
        if (userInfo != undefined && userInfo.email){
            nav('/greetings');
        }
    }, [userInfo])

    

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    function handleEmailPassLogin(e: any) {
        e.preventDefault();
        console.log({ email })
        console.log({ pass })

        dispatch(LoginFetch({ email: email, pass: pass }));

        // props.LoginFetch({ email: email, pass: pass });
        // console.log(props.userData.status)

        // if(props.userData.status)
        //     nav('/greetings');
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

// function mapStateToProps(state: any) {
//     return {
//         userData: state.user
//     }
// }

// function mapDispatchToProps(dispatch: any) {
//     return {
//         LoginFetch: (userInfo: any) => {
//             dispatch(LoginFetch(userInfo))
//         }
//     }
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Login);