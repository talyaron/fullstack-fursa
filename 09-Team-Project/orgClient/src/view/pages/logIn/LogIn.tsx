import './logIn.scss';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { AnyArray } from 'immer/dist/internal';
import { useNavigate } from 'react-router-dom'
import { fetchOrgUserAsync } from '../../../features/orgUser/orgUserReducer';
import ProminentAppBar from '../../Components/outsideHeader/header';
import { fontSize } from '@mui/system';



function Login() {
    const [ID, setID] = useState("");
    const [password, setPassword] = useState("");
    const nav = useNavigate();
    const orgUser = useAppSelector(state => state.orgUser);
    const dispatch = useAppDispatch();

    function hadleSubmit(e: any) {
        e.preventDefault();
        dispatch(fetchOrgUserAsync({ email: ID, password: password }));
    }


    useEffect(() => {
        if (JSON.stringify(orgUser.value.user) !== JSON.stringify({})) {
            nav('/accidents')
        }
    })

    return (
        <div>
            <ProminentAppBar />
            <form className='warpper' onSubmit={hadleSubmit}>
                <div className="warrper_header">
                    Login
                </div>
                <div className="email">
                    <label>Email</label>
                    <input type="email" name="email" placeholder='Email' onKeyUp={(e: any) => { setID(e.target.value) }} />
                </div>
                <div className="password">
                    <label>Password</label>
                    <input type="password" name="password" placeholder='Password' onKeyUp={(e: any) => { setPassword(e.target.value) }} />
                </div>
                <input type='submit' className='submit' value="Login" />
                {orgUser.status === 'loading' ?
                    <div>Loading...</div> :
                    null
                }
            </form>
        </div>
    )
}


export default Login;