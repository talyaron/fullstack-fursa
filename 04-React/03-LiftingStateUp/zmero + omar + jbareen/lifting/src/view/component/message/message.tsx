import React from 'react';
import { useState } from 'react';


interface MessageProp {
    setGeneralChat: any;
    generalChat: any;
    id: string;
    from: string;
    date?: Date;
}

function Message(props: MessageProp) {
    const { from, date, id } = props
    const { setGeneralChat, generalChat } = props;
    const [newMessage, setnewMessage] = useState()
    function handleMessage(ev: any) {
        ev.preventDefault();
        //setGeneralChat(generalChat.push({ text: newMessage, from: from, to: to, date: new Date() }))
        let copy = Object.assign([], generalChat);
        copy.push({ text: newMessage, to: from, date: new Date(), id: id })

        setGeneralChat(copy)
        ev.target[0].value = ""

    };
    return (
        <div className="inputMessage">
            <form onSubmit={handleMessage}>
                <input type="text" onKeyUp={(key: any) => {
                    setnewMessage(key.target.value)
                }} />
                <input type="submit" value="send" />
            </form>
        </div>
    )
}
export default Message;