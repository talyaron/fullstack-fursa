// import './ aboutUs.scss';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../../components/header/header';



const help = () => {
    return (
        <div>
            <header><Header></Header></header>
        <div className='warpper'>

            <div>
                <div>
                   <h1>for any help please concat us at : 
                   </h1>
                   <br />
                   <h2>Phone Number : 0505050123</h2>
                   <h2>E-mail : OnlineGroupMarket@gmail.com</h2>
                   <h2>Fax : 03-7777125</h2>
                   <h2>Office number: 03-7777124</h2>
                    <Link to="/store"> to home Page</Link>

                </div>
            </div>

        </div>
        </div>
    )
}


export default help;