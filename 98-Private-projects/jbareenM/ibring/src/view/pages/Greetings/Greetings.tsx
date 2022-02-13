import { useState } from 'react';
import './Greetings.scss';

import { Link, useLocation, useNavigate } from "react-router-dom";

function Greetings(props:any) {
    const nav = useNavigate();
    const {state}:any = useLocation();

    console.log(state);

    function hanleLetsStart(ev: any) {
        ev.preventDefault();
        nav('/ListForm', {
            state: state
        });
    }

    return (
        <div className="GreetingsTheme">

            <div className="imgGreeting">Template img</div>
            <div className="imgGreeting">Template img</div>

            <form onSubmit={hanleLetsStart} className="userGreeting">
                <label>Hi {state.email.toString().split('@')[0]}</label>
                <p>Let's make a sharing bring list!</p>
                <input className='letsStart' type="submit" value="Let's start!" />
            </form>
        </div>
    );
}

export default Greetings;