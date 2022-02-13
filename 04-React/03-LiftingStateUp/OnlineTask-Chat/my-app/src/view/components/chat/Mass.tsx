import React from "react";
import { useState } from "react";
import Chat from "./Chat";


interface chat {
    chats:any;
    setChats:any;
}



function Mass(props:chat) {
     const [message,setmessage]=useState('')
     const {chats,setChats}=props;
    function setMass(eve:any){
    eve.preventDefault()
      let copy=Object.assign([],chats);
      copy.push(message);
      setChats(copy);
      eve.target[0].value=''
      

    }
    return(
        <form onSubmit={setMass}>
            <input  type="text" id="msninput" onKeyUp={(eve:any)=>{setmessage(eve.target.value)}} />
            <button type="submit">send</button>
        </form>
    );
}
export default Mass;