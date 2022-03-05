import './LogIn.scss';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { CssTextField } from '../../../App';
import background from '../../images/background.jpg';
import logo from '../../images/logo.jpg';

function LogIn() {
    let navigate = useNavigate();

    function handleLogIn(ev:any){
        ev.preventDefault();
        navigate('MainScreen');
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
                        size="small" />
                    <br />
                    <br />
                    <CssTextField label="Password" focused
                        required
                        id="custom-css-outlined-password-input"
                        defaultValue=""
                        type="password"
                        size="small" />
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