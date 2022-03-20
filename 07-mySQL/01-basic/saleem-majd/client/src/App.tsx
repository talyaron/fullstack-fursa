import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";


function App() {
  const [fishes, setfishes] = useState([]);



  const handleGetPrivateInfo = async () => {
    const { data } = await axios.get("/get-fishes");
    setfishes(data)
    console.log(data);
  };

  return (
    <div className="App">
      
      <button onClick={handleGetPrivateInfo}>GET INFO</button>
      {fishes.map((cat: any, i) => {
        return <h1></h1>
      })}
    </div>
  );
}

export default App;
