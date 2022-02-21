import './createGroup.scss';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../../components/header/header';






const createGroup = () =>{

    function handelSubmit (ev:any){
        
    }

    return(
        <div>    <Header></Header>
        <div className='warpper'>
         
               <div>
               
              <h1> Create new Group </h1> <br /><br />
                <form onSubmit={handelSubmit}>
                Group Name: <br />
                <input type="text" />
                <br /><br />
                Members :  <br />
                <input type="email" placeholder='min 3 mumbers' />  <button>add</button>
                <br /><br />
               
                <Link type='submit' to="/Store">Login</Link>
                </form>
                <br />
                <Link to="/HomePage">cancle</Link>

               </div>
        </div>
        </div>
    )
}


export default createGroup;