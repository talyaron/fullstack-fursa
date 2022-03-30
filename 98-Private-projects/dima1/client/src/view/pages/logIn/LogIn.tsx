import './LogIn.scss';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { CssTextField } from '../../../App';
import background from '../../images/background.jpg';
import logo from '../../images/logo.jpg';
import { useState } from 'react';
import axios from 'axios';
import { useAppDispatch } from '../../../app/hooks';
import { updateUser } from '../../../app/reducers/userReducer';
import { getAllRecipes } from '../../../app/reducers/recipesReducer';

function LogIn() {
    let navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogIn(ev:any){
        ev.preventDefault();
        const result = await axios.post('/user/LogIn', {email: email, password: password});
        const data = result.data;
        if(data.ok){
            dispatch(updateUser(data.user));
            dispatch(getAllRecipes());
            navigate(`/${data.user.name}/MainScreen`);
        }
        else{
            alert('wrong email or password')
        }
    }

    function handleValidateEmail(ev:any){
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
        if(!ev.target.value.match(mailformat)){
            alert("You have entered an invalid email address!");
        }
    }

    return (
        <div className="logIn">
            <img className="image" src={background} alt="" />
            <div className='LogInBox'>
                <img className="logo" src={logo} alt="" />
                <h1>Welcome <br /> to Recipes App</h1>
                <h3>Sign In</h3>
                <form onSubmit={handleLogIn}>
                    <CssTextField label="E-mail Address" focused
                        required
                        id="custom-css-outlined-input"
                        defaultValue=""
                        size="small" onChange={(e) => setEmail(e.target.value)}
                        onBlur={handleValidateEmail}/>
                    <br />
                    <br />
                    <CssTextField label="Password" focused
                        required
                        id="custom-css-outlined-password-input"
                        defaultValue=""
                        type="password"
                        size="small" onChange={(e) => setPassword(e.target.value)}/>
                    <br />
                    <br />
                    <button type="submit">Log In</button>
                </form>
                <br/>
                <Link to='ResetPassword'>Forget Password ?</Link>
                <p>New in Recipes App ? <Link to='SignUp'><span>Sign Up Now</span></Link></p>
            </div>
        </div >
    );
}

export default LogIn;