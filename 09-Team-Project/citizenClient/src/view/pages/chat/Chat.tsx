
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import socketIOClient, { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { useAppSelector } from "../../../app/hooks";
import { getloginState } from "../../../app/reducer/userReducer";
import './Chat.scss'
const ENDPOINT = "http://localhost:3001/";
let socket: Socket<DefaultEventsMap, DefaultEventsMap>;

function Chat() {

  let isLogged = useAppSelector(getloginState)
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogged) {
      navigate("/");
    }
  }, [])

  /* previose page should pass
  accedent id,orgid

   i should get user id throw redux*/
  let userId = "1";
  let orgId = "1";



  const [response, setResponse] = useState("");

  useEffect(() => {
    socket = socketIOClient(ENDPOINT);

    /* will be replace with chat box*/
    socket.on("FromAPI", (data: React.SetStateAction<string>) => {
      setResponse(data);
    });
    /* set user id */
    socket.emit("setUserData", userId)
    /* set user id */
    socket.emit("setOrgData", userId)
  }, []);
  const [value, setValue] = useState('');
  const submitForm = (e: any) => {
    e.preventDefault();
    socket.emit('message', {
      from: userId,
      date: new Date().toLocaleString() + "",
      type: "message",
      video: "",
      picture: "",
      message: value,
      location: { lat: "", lng: "" },
      communicationType: {},
      orgId: orgId
    });
    setValue('');
  }
  return (

    <div className="container">
      <time dateTime={response}>{response}</time>
      <form onSubmit={submitForm}>
        <input
          autoFocus
          value={value}
          placeholder="اكتب رسالتك"
          onChange={(e) => {
            setValue(e.currentTarget.value);
          }} />
      </form>
    </div>



  );
}

export default Chat;
