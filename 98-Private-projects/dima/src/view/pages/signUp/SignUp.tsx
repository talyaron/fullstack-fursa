import { FormControl, TextField } from "@mui/material";
import './SignUp.scss';

export default function SignUp(){

    return(
        <div className="SignUpBox">
            <h1>Create New Account</h1>
            <form>
                <p>Name</p>
                <input type="text" placeholder="Insert your name" />
                <p>E-mail Address</p>
                <input type="text" placeholder="Insert your email" />
                <p>Password</p>
                <input type="text" placeholder="Insert a password" />
                <p>Confirm Password</p>
                <input type="text" placeholder="Confirm your password" />
                {/* <TextField label="Phone Number"  focused sx={{ height: '10%' }}/> */}
                <button type="submit"></button>
            </form>
        </div>
    );
}