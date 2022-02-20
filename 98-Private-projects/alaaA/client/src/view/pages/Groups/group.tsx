import './group.scss';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../../components/header/header';



const group = () =>{
    return(
        <div>
              <header>
             <Header></Header>
             </header>
        <div className='warpper'>
          
            <div>
            welcome to your groups <br /><br />
            
            <Link to="/mygroups">Your GROUPs </Link>
            <br />

            <Link to="/CreateGroup">create GROUP</Link>
            <br />
            <Link to="/Store" > to Store</Link>
            </div>
            </div>
        </div>
    )
}


export default group;