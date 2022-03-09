import { DefaultEventsMap } from "@socket.io/component-emitter"; 
import React, { useState, useEffect } from "react";  
import socketIOClient, { Socket } from "socket.io-client";  
const ENDPOINT = "http://localhost:3001/";  
  let socket: Socket<DefaultEventsMap, DefaultEventsMap>;  
function Chat() {  
  let userId = "1";  
  let orgId = "1";  
  const [response, setResponse] = useState("");  
  
  useEffect(() => {  
    socket = socketIOClient(ENDPOINT);  
  
    /* will be replace with chat box*/  
    socket.on("FromAPI", data => {  
      setResponse(data);  
    });  
    /* set user id */  
    socket.emit("setUserData",userId)  
    /* set user id */  
    socket.emit("setOrgData",userId)  
  }, []);  
  const [value, setValue] = useState('');  
  const submitForm = (e:any) => {  
    e.preventDefault();  
    socket.emit('message', value);  
    setValue('');  
  }  
  return (  
      
      <><time dateTime={response}>{response}</time><form onSubmit={submitForm}>  
      <input  
        autoFocus  
        value={value}  
        placeholder="Type your message"  
        onChange={(e) => {  
          setValue(e.currentTarget.value);  
        } } />  
    </form></>  
      
      
      
  );  
}  
  
export default Chat;