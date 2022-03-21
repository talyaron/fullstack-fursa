import React from 'react'

import { Link } from 'react-router-dom';


function Login() {
    return (
        <div>
            <h1>Login</h1>
            <div className="userName">
                <span> User Name :</span>
                <input type="text" id="lname" name="lname" />
            </div>

        </div >
    )
}

export default Login;