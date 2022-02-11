import './logIn.scss';
import React, { useState } from 'react';
import { Link } from "react-router-dom";



const Login = () =>{
    return(
        <div className='warpper'>
         
               <div>
               Login <br /><br />
                <br /><br />
               Username <br />
                <input type="text" />
                <br /><br />
                Password <br />
                <input type="password" />
                <Link to="/App">Login</Link>
                
                <br />
                <Link to="/HomePage">cancle</Link>

               </div>
        </div>
    )
}


export default Login;