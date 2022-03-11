import React from 'react'
import { useNavigate } from 'react-router-dom';
import './MessageComp.scss'

const MessageComp = (props: any) => {
    const { accident } = props;

    const nav = useNavigate();

    function handleComp() {
        //  nav(`/${accident._id}`)
    }
    return (


        <div className='MessageCompContainer' onClick={handleComp}>
            <div className="messageFrom">Message From:
                <div className="messageheader">header</div>
            </div>
            <div className="numOfUnread">9</div>


        </div>
    )
}

export default MessageComp;