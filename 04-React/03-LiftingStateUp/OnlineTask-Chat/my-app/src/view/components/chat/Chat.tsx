import React from "react";
import { useState } from "react";


interface chat {
    inChat:string;
    chats:any;
    setChats:any;
}

function Chat(prop:chat){
    const {inChat} = prop;

return (
    <div>
        {inChat}
    </div>
);
}

export default Chat;