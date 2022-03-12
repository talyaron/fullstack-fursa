import React from 'react'
import { useNavigate } from 'react-router-dom';
import './MessageComp.scss'

interface Mssage {
    from: String;
    lastMessage: String;
    unreadnumber: number;

}

const MessageComp = (props: Mssage) => {
    const { from, lastMessage, unreadnumber } = props;

    const nav = useNavigate();

    function handleComp() {
        //  nav(`/${accident._id}`)
    }
    return (


        <div className='MessageCompContainer' onClick={handleComp}>
            <div className="messageFrom">{from}
                <div className="messageheader">{lastMessage}</div>
            </div>

            {unreadnumber == 0 ? null :
                <div className="numOfUnread">{unreadnumber}</div>}


        </div>
    )
}

export default MessageComp;