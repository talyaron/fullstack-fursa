import { useEffect, useState } from 'react';
import './Greetings.scss';

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { UserState } from '../../../redux/reducers/userReducer';

function Greetings(props: any) {
    const userLogin = useSelector<RootState, UserState>(state => state.user);
    // const dispatch = useDispatch();
    const { userInfo } = userLogin;
    console.log(userInfo);
    const nav = useNavigate();

    function hanleLetsStart(ev: any) {
        ev.preventDefault();
        nav('/ListForm');
    }

    function handleLogout(ev: any) {
        ev.preventDefault();
        localStorage.removeItem('userInfo');
        localStorage.removeItem('listInfo');
        nav('/login');
    }

    return (
        <div className="GreetingsTheme">

            <div className="imgGreeting">Template img</div>
            <div className="imgGreeting">Template img</div>

            <form onSubmit={handleLogout}>
                <input type="submit" value="logout" />
            </form>

            <form onSubmit={hanleLetsStart} className="userGreeting">
                <label>Hi {(userInfo != undefined && userInfo.email) ? userInfo.email.toString().split('@')[0] : "Unknown"}</label>
                <p>Let's make a sharing bring list!</p>
                <input className='letsStart' type="submit" value="Let's start!" />
            </form>
        </div>
    );
}

export default Greetings;