import React from 'react'
import { useNavigate } from 'react-router-dom';
import './MessageComp.scss'

interface Mssage {
    sender: string;
    lastMessage: string;
    unreadnumber: number;

}

const MessageComp = (props: Mssage) => {
    const { sender,lastMessage ,unreadnumber} = props;

    const nav = useNavigate();

    function handleComp() {
        //  nav(`/${accident._id}`)
    }
    return (


        <div className='MessageCompContainer' onClick={handleComp}>
            <div className="messageFrom">{sender}
                <div className="messageheader">{lastMessage}</div>
            </div>
            <div className="numOfUnread">{unreadnumber}</div>


        </div>
    )
}

export default MessageComp;