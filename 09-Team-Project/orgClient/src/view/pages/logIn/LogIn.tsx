import './logIn.scss';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useAppDispatch } from '../../../app/hooks';
import { AnyArray } from 'immer/dist/internal';
import {useNavigate } from 'react-router-dom'



function Login() {
    const [ID, setID] = useState("");
    const [password, setPassword] = useState("");
    const nav=useNavigate();
    const dispatch = useAppDispatch();

    function hadleSubmit(e: any) {
        e.preventDefault();

        // dispatch(login([ID, password, true]));
            if(ID === "314763467" && password==="123456")
            {  nav("/Seller");}
             else if(ID !== "" && password!=="")
              {
                nav("/Group");} 
             }


    return (
      <div className="warpper">
        <div>
          <form onSubmit={hadleSubmit}>
            Login <br />
            <br />
            <br />
            <br />
            ID <br />
            <input
              type="text"
              onKeyUp={(e: any) => {
                setID(e.target.value);
              }}
            />
            <br />
            <br />
            Password <br />
            <input
              type="password"
              onKeyUp={(e: any) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <br />
            <input type="submit" className="submit" value="Login" />
            <br />
          </form>
          <Link to="/HomePage">cancel</Link>
        </div>
      </div>
    );
}


export default Login;