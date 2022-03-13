import './homePage.scss';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';



const HomePage = () =>{
    // useEffect(()=>{
    //     axios.get("/Cookie")
    //     .then(({data})=>{
    //       console.log(data);
    //     })
    //   },[]);
    
    return(
        <div className='warpper'>
            <div>
            welcome to Abo Ali onlineMarket <br /><br />
            <Link to="/Login">Sign IN </Link>
            <br />
            <Link to="/signUp">Sign UP</Link>
            <br />
            <Link to="/AboutUs">About Us</Link>
            </div>
        </div>
    )
}


export default HomePage;