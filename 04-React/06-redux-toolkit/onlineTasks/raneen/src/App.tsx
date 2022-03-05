import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import TextShow from "./features/text/TextShow";
import TextInput from "./features/text/TextInput";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <TextInput />
        <TextShow />
        <Counter />
      </header>
    </div>
  );
}

export default App;
