import React from "react";
import { useState } from "react";
import Chat from "./Chat";


interface chat {
    chats:any;
    setChats:any;
}

<<<<<<< Updated upstream


function Mass(props:chat) {
     const [message,setmessage]=useState('')
     const {chats,setChats}=props;
    function setMass(eve:any){
    eve.preventDefault()
      let copy=Object.assign([],chats);
      copy.push(message);
      setChats(copy);
      eve.target[0].value=''
      

    }
    return(
        <form onSubmit={setMass}>
            <input  type="text" id="msninput" onKeyUp={(eve:any)=>{setmessage(eve.target.value)}} />
            <button type="submit">send</button>
        </form>
=======
function setMass(){
    chats.push(document.getElementById("textInput"));
        let tokenAmount = ;
        return  // whatever you want to do with it
    
}
function AddToChat({ setTodos }) {
    function handleSubmit(event) {
      event.preventDefault();
      const todo = event.target.elements.todo.value;
      setTodos(prevTodos => [...prevTodos, todo]);
    }
  

function Mass() {
    const getInputValue = (event)=>{
        // show the user input value to console
        const userValue = event.target.value;

    };
    return(
        <div>
         <input type="text" name="textInput" id="textInput" />
            <button type="button" onClick={setMass}>sumbit</button>

        </div>
>>>>>>> Stashed changes
    );
}
export default Mass;