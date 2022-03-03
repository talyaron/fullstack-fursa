import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import CatRow from './CatRow';

function App() {
  const [kitties, setKitties] = useState([]);
  
  useEffect(() => {
    axios.get("/get-all-kitens").then(({ data }) => {
      console.log(data);
      setKitties(data);
    });
  }, []);



  return (
    <div className="App">
      {kitties.map((cat: any, i) => {
        return (
          <CatRow key={cat._id} cat={cat} />
        );
      })}
    </div>
  );
}

export default App;
