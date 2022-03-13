import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { fetchMssagesAsync } from '../../../app/reducer/MssageReducer';
import MessageComp from '../../Components/MessageComp/MessageComp';
import './MessageSubMenu.scss'

interface Mssage {
    from: String;
    lastMessage: String;
    unreadnumber: number;

}


const MessageSubMenu = () => {
    const MessagesReducer = useAppSelector(state => state.Messages);
    // console.log(MessagesReducer.value.MessagesChats);
    const messages: Array<String> = [];
    const messagelist: Array<Mssage> = [];


    for (const variable in MessagesReducer.value.MessagesChats) {

        if (!messages.includes(MessagesReducer.value.MessagesChats[variable].from)) {
            messagelist.push({
                from: MessagesReducer.value.MessagesChats[variable].from,
                lastMessage: MessagesReducer.value.MessagesChats[variable].message,
                unreadnumber: 0
            })
            messages.push(MessagesReducer.value.MessagesChats[variable].from);

        }
        else {
            for (const obj of messagelist) {
                if (obj.from == MessagesReducer.value.MessagesChats[variable].from) {
                    obj.lastMessage = MessagesReducer.value.MessagesChats[variable].message
                    obj.unreadnumber = obj.unreadnumber + 1;
                    break;
                }
            }

        }


    }
    console.log(messagelist);

    const dispatch = useAppDispatch();
    const nav = useNavigate();


    async function handelNewMessage() {
        try {
            const response = await axios.post('./messages/addNewMessages');
            return response.data;
        } catch (error: any) {
            console.error(error);
        }

    }

    useEffect(() => {
        dispatch(fetchMssagesAsync())
    }, [])


    return (
        <div className='wrrap'>
            <div className="accidentsContent">

                {messagelist.map((elemnt, index) => {
                    return (
                        <MessageComp key={index} from={elemnt.from} lastMessage={elemnt.lastMessage} unreadnumber={elemnt.unreadnumber} />
                    );
                })}

            </div>
            {/* <div className="newMssage" onClick={()=>{nav('/messagesBetweenOrg')}}></div> */}
            <div className="newMssage" onClick={handelNewMessage}></div>
        </div>
    )
}

export default MessageSubMenu