import './logIn.scss';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useAppDispatch } from '../../../app/hooks';
import { login } from "../../../features/user/userReducer";
import { AnyArray } from 'immer/dist/internal';
import {useNavigate } from 'react-router-dom'



function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const nav=useNavigate();
    const dispatch = useAppDispatch();

    function hadleSubmit(e: any) {
        e.preventDefault();

        dispatch(
            login([email, password, true]));

        nav("/Store");
    }

    useEffect(() => {
        console.log("aaa")
    }, [])

    return (
        <div className='warpper'>
            <div>
                <form onSubmit={hadleSubmit}>
                    Login <br /><br />
                    <br /><br />
                    Email <br />
                    <input type="email" onKeyUp={(e:any)=>{setEmail(e.target.value)}} />
                    <br /><br />
                    Password <br />
                    <input type="password" onKeyUp={(e:any)=>{setPassword(e.target.value)}} />
                    <br /><br />
                    <input type='submit' className='submit' value="submit" />
                    {/* <Link to="/Store">Login</Link> */}
                    <br />
                </form>
                <Link to="/HomePage">cancle</Link>


            </div>

        </div>


    )
}


export default Login;