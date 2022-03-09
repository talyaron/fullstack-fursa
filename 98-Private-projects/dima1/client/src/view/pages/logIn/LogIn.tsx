import './LogIn.scss';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { CssTextField } from '../../../App';
import background from '../../images/background.jpg';
import logo from '../../images/logo.jpg';
import { useState } from 'react';
import axios from 'axios';

function LogIn() {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogIn(ev:any){
        ev.preventDefault();
        const result = await axios.post('/userRecipes/LogIn', {email: email, password: password})
        console.log(result);
        const data = result.data;
        if(data.ok){
            navigate('MainScreen');
        }
        else{
            alert('wrong email or password')
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
                        size="small" onChange={(e) => setEmail(e.target.value)}/>
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