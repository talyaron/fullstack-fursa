import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Message from './view/component/message/message'

interface MessageProp {
  id: string;
  text: string;
  from: string;
  to: string;
  date?: Date;
}

function App() {
  const [generalChat, setGeneralChat] = useState([{
    id: 1,
    text: "",
    from: "",
    to: "",
    date: new Date(),
  }])
  return (
    <div className="App">
      <div className="messageContainer">
        <Message id={'one'} setGeneralChat={setGeneralChat} generalChat={generalChat} from="omar" date={new Date()}></Message>
        <Message id={'two'} setGeneralChat={setGeneralChat} generalChat={generalChat} from="mohamed" date={new Date()}></Message>
      </div>
      <div className="allmessages">
        {generalChat.map((element, index) => {
          const { text, from, to, date, id } = element
          return (<p className={`messageid${id}`} key={index} >{text}</p>)
        })}
      </div>

    </div>
  );
}

export default App;
