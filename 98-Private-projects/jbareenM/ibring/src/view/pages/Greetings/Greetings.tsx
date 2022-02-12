import { useState } from 'react';
import './Greetings.scss';

import { Link, useNavigate } from "react-router-dom";

function Greetings() {
    const [user, setUser] = useState("Liora");
    const nav = useNavigate();

    function hanleLetsStart(ev: any) {
        ev.preventDefault();
        console.log(user);
        // <Link to='/ListForm' />
        nav('/ListForm');
    }

    return (
        <div className="GreetingsTheme">

            <div className="imgGreeting">Template img</div>
            <div className="imgGreeting">Template img</div>

            <form onSubmit={hanleLetsStart} className="userGreeting">
                <label>Hi {user}</label>
                <p>Let's make a sharing bring list!</p>
                <input className='letsStart' type="submit" value="Let's start!" />
            </form>
        </div>
    );
}

export default Greetings;