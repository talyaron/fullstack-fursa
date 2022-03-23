import React, { useState } from "react";
import './chatRooms.scss'


interface roomFormat{
  chatRoomId: String,
  user1:String,
  user2:String
}

function ChatRooms(){

  const [rooms,setRooms] = useState([]);

  return (
    <div className="chatRoomsWrapper">
    <div className="box">
  <div className="container-4">
    <input type="search" id="search" placeholder="Search..." />
    <button className="icon"><i className="fa fa-search"></i></button>
  </div>
</div>
<div className="rooms">
  {
      rooms.map((elemnt:roomFormat, index) => {
        return (
          <h1>{elemnt.user2}</h1>
        )})}


    
</div>
</div>


)

}
export default ChatRooms;