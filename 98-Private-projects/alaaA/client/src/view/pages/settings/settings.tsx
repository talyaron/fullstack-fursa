// import './ aboutUs.scss';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../../components/header/header';



const settings = () => {
    return (
        <div>
            <header><Header></Header></header>
        <div className='warpper'>

            <div>
                <div>
                 <h1>in this page you can change:</h1>
                 <h3>your profile attributes like photo , address , phone number etc.</h3>
                 <h3>your web language </h3>
                 <h3>and more :) </h3>
                    <Link to="/store"> to home Page</Link>

                </div>
            </div>

        </div>
        </div>
    )
}


export default settings;