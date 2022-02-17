import './signUp.scss';
import React, { useState } from 'react';
import { Link } from "react-router-dom";



const signUp = () => {
    return (
        <div className='warpper'>

            <div>
                <div >
                    <h1> Sign Up</h1>
                </div>   
                  <br /><br />
                <div>
                    Username  
                    <input type="text" />
                </div>
                <div>
                    <br />
                    Username  
                    <input type="text" />
                </div>
                <div>
                <br />
                    Username  
                    <input type="text" />
                </div>
                <div>
                <br />
                    Username  
                    <input type="text" />
                </div>
                <div>
                <br />
                    Password  
                    <input type="password" />
                </div>
                <div>
                <br />
                    re-Password  
                    <input type="password" />
                </div>
                <div>
                <br />
                    Byer/seler  
                    <input type="radio" id="html" name="fav_language" value="HTML" />
                    <label>Byer</label>
                    <input type="radio" id="html" name="fav_language" value="HTML" />
                    <label>S</label>
                </div>

                <Link to="/App">signUp</Link>
                <br />
                <Link to="/HomePage">cancle</Link>

                 
            </div>
        </div>
    )
}


export default signUp;