import React, { useState } from 'react';

const Login = () =>{
    return(
        <div>
            Login <br /><br />
            <div>
                Username <br />
                <input type="text" />
            </div>
            <div>
                Password <br />
                <input type="password" />
            </div><br />
            <input type="button" value="Login" />
        </div>
    )
}


export default Login;