import { Link } from "react-router-dom";
import './index.scss';

function SignUp(){

    return(
        <div className="signup">
            <h2>Sign Up</h2>
         <p>  User Name</p> 
        <input type="text" />
        <p>Last Name</p>
        <input type="text" />
        <p>Email</p>
        <input type="text" />
        <p>Password</p>
        <input type="text" />
        <p>Confirm password</p>
        <input type="text" />
<br />
<br />
<Link to={`/signIn`}>
   <button>submit</button>
   </Link>
</div>
        
    );

}

export default SignUp;