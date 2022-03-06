import React from "react";
import { Router } from "react-router-dom";
import { Link } from "react-router-dom";

function Main() {
    return (
        <div> 
            <text>username</text>
            <input> </input>
            <text>passowrd</text>
            <input> </input>
            
            <Link to='/store'> <div>Log In</div> </Link>
         </div>
    );
}

export default Main;