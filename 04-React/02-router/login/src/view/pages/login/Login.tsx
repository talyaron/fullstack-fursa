// import './logIn.scss';
import React, { useState } from 'react';
import { Link } from "react-router-dom";



const Login = () =>{
    return(
        <div className='warpper'>
            Login <br /><br />
            <div>
                Username <br />
                <input type="text" />
            </div>
            <div>
                Password <br />
                <input type="password" />
            </div><br />
            <Link to="/Store">Login</Link>
            {/* <input type="button" value="Login" /> */}
        </div>
    )
}


export default Login;
