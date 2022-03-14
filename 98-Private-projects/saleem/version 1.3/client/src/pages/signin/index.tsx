import React, { ChangeEvent, useEffect,useState } from 'react'
import { Input } from '../../components/Input'
import { PageHeader } from '../../components/PageHeader'

import { useNavigate } from "react-router-dom";
import checkVerified from '../../Api'
import './style.css'




export function Signin() {
  
    const [WrongCredintialsMsg, setWrongCredintialsMsg] = useState(false);
    const [userName,setuserName] = useState("");
    const [password,sepassword] = useState("");

    const navigate = useNavigate();
    let updateUser = (event: ChangeEvent<HTMLInputElement>) => {
        setuserName(event.currentTarget.value);
      };

   
    const updatePass =(event: ChangeEvent<HTMLInputElement>) => {
        sepassword(event.currentTarget.value);
      };


      
    const handleClick = () => {
      checkVerified({user:userName,pss:password})
      .then((res:any)=> {
         if(res.status == "200")
         {
             navigate("/dashboard")
         }
         
   })
  .catch((err:any) =>{
  
    console.log("wrong credintials")
    setWrongCredintialsMsg(true)
    console.log(WrongCredintialsMsg)
  

  })
}
      
    
    return (
        <div id="page-login">
            <PageHeader title="Login " >
                <form action="" id="Login">
                
                </form>
            </PageHeader>

            <main>
            <Input name="name" onChange={updateUser} label="Email" />
            <Input type="password" onChange={updatePass}  name="email" label="password" />
            

            <button onClick={handleClick}>Log in</button>
            { WrongCredintialsMsg ? <h3  style={{color: "red"}}>wrong credintials</h3> : null }
           
           
            </main>
        </div>
    )
}
