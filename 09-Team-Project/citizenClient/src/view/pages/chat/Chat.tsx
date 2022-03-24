import React, { useState, useEffect } from "react";
import socketIOClient, { Socket } from "socket.io-client";
import Navbar from "../../components/navbar/navbar";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import "./Chat.scss";

const ENDPOINT = "http://localhost:3001/";
let socket: Socket<DefaultEventsMap, DefaultEventsMap>;

function Chat() {
  /* previose page should pass
  accedent id,orgid

   i should get user id throw redux*/

  interface messageFormat {
    chatId: String;
    from: String;
    date: Date;
    type: { type: String; enum: ["video", "picture", "message", "location"] };
    video: String;
    picture: String;
    message: String;
    location: { lat: String; lng: String };
    communicationType: { type: String; enum: ["org", "user"] }; //user = communication between org-user; org = comm.between org-org
    accidentId: String;
    orgId: String;
  }
  let userId = "2";
  let orgId = "3";

  const [messages, setMessages] = useState({});

  useEffect(() => {
    socket = socketIOClient(ENDPOINT);

    /* will be replace with chat box*/
    socket.on("FromAPI", (data: React.SetStateAction<string>) => {
      //setResponse(data);
      setMessages(data);
    });
    /* set user id */
    socket.emit("setUserData", userId);
    /* set user id */
    socket.emit("setOrgData", orgId);
  }, []);
  const [value, setValue] = useState("");
  const submitForm = (e: any) => {
    e.preventDefault();
    socket.emit("message", {
      from: userId,
      date: new Date().toLocaleString() + "",
      type: "message",
      video: "",
      picture: "",
      message: value,
      location: { lat: "", lng: "" },
      communicationType: "user",
      orgId: orgId,
    });
    setValue("");
  };
  return (
    <div className="chatPage">
      <Navbar />

      <div className="chatContainer">
        <div className="wrapper">
          {Object.entries(messages).map(function (val: any, index) {
            const new_message: messageFormat = val["1"];
            {

              if (new_message.from == userId)
                return <div className="you message">{new_message.message}</div>
              else
                return <div className="them message">{new_message.message}</div>

            }
          })}
        </div>
        <form onSubmit={submitForm}>
          <input
            autoFocus
            value={value}
            placeholder="Type your message"
            onChange={(e) => {
              setValue(e.currentTarget.value);
            }}
          />

        </form>
      </div>
    </div>
  );
}

export default Chat;
