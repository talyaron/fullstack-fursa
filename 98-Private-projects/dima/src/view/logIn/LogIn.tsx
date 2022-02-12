import { Link } from 'react-router-dom';
import './LogIn.scss';

function LogIn() {
    return (
        <div className='LogInBox'>
            <div className="wrapper">
                <h1>Welcome <br/> to Recipes App</h1>
                <h3>Sign In</h3>
                <input type="text" placeholder='E-mail Address'></input>
                <br/>
                <br/>
                <input type="text" placeholder='Password'></input>
                <br/>
                <br />
                <div className='Button'>Sign In</div>
                <p>Forget Password ?</p>
                <p>New in Recipes App ? <span>Sign Up Now</span></p>
            </div>
        </div>
    );
}

export default LogIn;