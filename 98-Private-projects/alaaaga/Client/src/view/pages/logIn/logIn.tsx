import './logIn.scss';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useAppDispatch } from '../../../app/hooks';
import { login } from "../../../features/user/userReducer";



const Login = () =>{
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

//     const dispatch = useAppDispatch();

//     const hadleSubmit = (e:any)=>{
//         e.preventDefault();

//         dispatch(
//             login([email,password,true]));
// };

    return(
        <div className='warpper'>
         <form className="login__form" /*onSubmit={(e)=> hadleSubmit(e)}*/ >
               <div>
               Login <br /><br />
                <br /><br />
               Email <br />
                <input type="email"  value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <br /><br />
                Password <br />
                <input type="password"   value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <br /><br />
                <button type='submit' className='submit' >submit</button>
                <br />
                <Link to="/HomePage">cancle</Link>


               </div>
               </form>
        </div>
      
     
    )
}


export default Login;