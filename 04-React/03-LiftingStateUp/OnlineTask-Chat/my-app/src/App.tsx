import React from 'react';

import './App.css';
import Chat from './view/components/chat/Chat'
import Mass from './view/components/chat/Mass'

interface chat {
  inChat:string;

}

// function chatList() {
//   const [chats, setChats] = React.useState(["hiii"]);

//   return (
//     <ul>
//       {chats.map((chat) => (
        
//         <li key={chat}>{chat}</li>
        
//       ))}
//     </ul>
//   );
// }
// function AddTochat() {
//   function handleSubmit(event:any) {
//     event.preventDefault();
//     const todo = event.target.elements.todo.value;
//     console.log(todo);
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" id="chat" />
//       <button type="submit">Add chat</button>
//     </form>
//   );
// }
const chats:Array<string>=["hello"]


function App() {
  const [chats, setChats] = React.useState([]);    
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
      {chats.map((chat, index)=>{
        
        return <Chat key={index} inChat={chat} chats={chats} setChats={setChats} />
      })}
      </div>
      <Mass  chats={chats} setChats={setChats}></Mass>
      </header>
    </div>
  );
  



  // return (

  //   // <div>

  //   //   {/* <chatList />
  //   //   <AddTochat /> */}
  //   //   {/* <chatList />
  //   //   <AddTochat /> */}
  //   // </div>
  // );
}

export default App;