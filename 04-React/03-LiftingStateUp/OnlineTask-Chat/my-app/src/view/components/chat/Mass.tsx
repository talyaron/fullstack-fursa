import React from "react";
import { useState } from "react";
import Chat from "./Chat";


interface chat {
    inChat:string;
    chats:any;
    setChats:any;
}

function setMass(){
    return(
        chats
    );
}

function Mass() {
    
    return(
        <div>
            <input  type="text"  />
            <button onClick={setMass}>chat!</button>
        </div>
    );
}
export default Mass;