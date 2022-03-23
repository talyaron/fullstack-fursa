import React, { useEffect, useState } from "react";
import socketIOClient,{ Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import './chatRooms.scss'
const ENDPOINT = "http://localhost:3001/";
let socket: Socket<DefaultEventsMap, DefaultEventsMap>;

const user1 = "1";
const user2 = "2"

interface roomFormat{
  chatRoomId: String,
  user1:String,
  user2:String
}

function ChatRooms(){

  const [rooms,setRooms] = useState({});
  useEffect(() => {
    socket = socketIOClient(ENDPOINT);
    socket.on("getRoams", (data: React.SetStateAction<string>) => {
      setRooms(data);
    });
    /* set user id */
    socket.emit("setUserData", user1);
    
  }, []);
  return (
    <div className="chatRoomsWrapper">
    <div className="box">
  <div className="container-4">
    <input type="search" id="search" placeholder="Search..." />
    <button className="icon"><i className="fa fa-search"></i></button>
  </div>
</div>
<div className="rooms">
 {/*
      rooms.map((elemnt:roomFormat, index) => {
        return (
          <h1>{elemnt.user2}</h1>
        )})*/
}


    
</div>
</div>


)

}
export default ChatRooms;