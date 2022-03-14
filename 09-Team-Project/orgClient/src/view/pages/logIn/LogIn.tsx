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
        <div className='warpper'>
            <div>
            <ProminentAppBar />
                <form onSubmit={hadleSubmit}>
                   <div style={{ backgroundColor: "#889FEF" , display:"flex" , justifyContent:"center" , alignItems:"center" , color:"white", fontSize:"18px"}}
> Login</div> <br /><br />
                    <br /><br />
                    E-mail <br />
                    <input type="email" placeholder='email' onKeyUp={(e: any) => { setID(e.target.value) }} />
                    <br /><br />
                    Password <br />
                    <input type="password" placeholder='password' onKeyUp={(e: any) => { setPassword(e.target.value) }} />
                    <br /><br />
                    <input type='submit' className='submit' value="Login" />
                    <br />
                </form>
                {orgUser.status === 'loading' ?
                    <div>Loading...</div> :
                    null
                }
                <Link to="/HomePage">cancel</Link>


            </div>

        </div>


    )
}


export default Login;