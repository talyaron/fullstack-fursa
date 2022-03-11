import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import MessageComp from '../../Components/MessageComp/MessageComp';

interface Mssage {
    sender: string;
    lastMessage: string;
    unreadnumber: number;

}


const MessageSubMenu = () => {
    const accidentsReducer = useAppSelector(state => state.accidents);

    const messages: Array<Mssage> = [{ sender: 'mecha', lastMessage: 'how are you', unreadnumber: 2 }, { sender: 'Elias', lastMessage: 'where are you', unreadnumber: 1 }, { sender: 'soso', lastMessage: 'nice to meet you', unreadnumber: 3 }]
    const dispatch = useAppDispatch();
    const nav = useNavigate();

    useEffect(() => {
        //dispatch(fetchAccidentsAsync())
    }, [])

    {/* {accidentsReducer.status === 'loading' ? <div>Loading...</div> :
      accidentsReducer.value.accidents.map((accident, index) => {
        return (
          // <AccidentComp key={index} connect={"connect"} emergency={accident.emergency} details={accident.description} notifications={accident.address} />
          <MessageComp key={index} accident={accident} />

        );
      })
    } */}

    return (
        <div className='wrrap'>
            <div className="accidentsContent">

                {messages.map((elemnt, index) => {
                    return (
                        <MessageComp key={index} sender={elemnt.sender} lastMessage={elemnt.lastMessage}  unreadnumber={elemnt.unreadnumber} />
                    );
                })}

            </div></div>
    )
}

export default MessageSubMenu