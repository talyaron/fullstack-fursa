import './homePage.scss';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Mainbar from '../../components/menu/menu';



const homePage = () =>{
    return(
      

        <div className='warpper'>
             <Mainbar></Mainbar>
 
        </div>
    );
}

export default homePage;