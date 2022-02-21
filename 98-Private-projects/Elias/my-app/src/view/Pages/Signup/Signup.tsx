import { useState } from 'react';
import './Signup.scss';

import { Link, useLocation, useNavigate } from "react-router-dom";

function Signup(props: any) {


    function hanleLetsStart(ev: any) {

    }

    return (
        <div className='wrapper'>
            <div >signup to save list</div>
            <div className='imagTeampet'>
                <img src="" alt="" />
            </div>
            <div className='loginOp'>
                <button className='googlebuttonText'>Google</button>
                or
                <form className='other' action="submit">
                    <input type="text" className=' inputs username' placeholder='Email' />
                    <input type="password" className='inputs password' placeholder='Password' />

                </form>

                <button className='SignUpbtn'>Sign Up</button>
            </div>

        </div>

    );
}

export default Signup;