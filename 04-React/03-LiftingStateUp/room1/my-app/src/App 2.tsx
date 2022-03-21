import React from "react";
import logo from "./logo.svg";
import Input from "./components/Input";
import "./App.css";
import { useState } from "react";
import Message from "./components/Message";
function App() {
  const [arr, setArr] = useState<Array<{ value: string }>>([]);
  
  return (
    <div className="App">
      {arr.map((message, id) => {return <Message key={id} value={message.value} />})}
      <Input arr={arr} setArr={setArr} />
    </div>
  );
}

export default App;
