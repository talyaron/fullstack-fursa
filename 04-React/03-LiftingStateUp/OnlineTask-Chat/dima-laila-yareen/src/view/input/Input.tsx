import { useState } from 'react';
import App from '../../App';
import Messages from '../message/Messages';

const initialArr:Array<string> = []; 

function Input() {

    let [chat, setChat] = useState(initialArr);
    const [inputValue, setValue] = useState('');

    function handleInput(input: string) {
        const newChat = [...chat, input];
        chat = [...newChat];
        setChat(chat);
        console.log(chat);
    }
    return (
        <div>
            {chat.map((message, index) => {
                return <Messages key={index} message={message} />
            })}
            <input placeholder="send" onChange={e => setValue(e.target.value)} />
            <br />
            <button onClick={() => handleInput(inputValue)} > Send message</button>
            
        </div>
    );
}

export default Input;