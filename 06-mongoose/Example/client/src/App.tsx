import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import CatRow from "./CatRow";

function App() {
  const [kitties, setKitties] = useState([]);
  const [ownerName, setOwnerName] = useState("");
  const [ownerId, setOwnerId] = useState("");

  useEffect(() => {
    axios.get("/get-all-kitens").then(({ data }) => {
      console.log(data);
      setKitties(data);
    });
  }, []);

  const handleAddOwner = (ev: any) => {
    ev.preventDefault();
   
    try {
      const name = ev.target.elements.name.value;
      const id = ev.target.elements.id.value;
      console.log(name, id);
      if (name && id) {
        setOwnerName(name);
        setOwnerId(id);
        axios.post('/owenrs/add-owner',{id, name})
        .then(({data})=>{
          console.log(data)
        })
        .catch(err=>{
          console.error(err)
        })
        ev.target.reset();
      }
    } catch (error) {
      console.error(error)
    }
  };

  const handleAddCat = (ev: any) => {
    ev.preventDefault();
    console.log(ev);
    try {
      const name = ev.target.elements.name.value;
      const city = ev.target.elements.city.value;
    } catch (error) {
      console.error(error)
    }
  };

  const handleChangeOwner = ()=>{
    console.log('change owner')
    setOwnerId(''); 
    setOwnerName('')
  }

  return (
    <div className="App">
      {ownerId.length === 0?
      <form onSubmit={handleAddOwner}>
        <input type="text" name="name" placeholder="Name of Owner" />
        <input type="text" name="id" placeholder="id of the woner" />
        <button type="submit">ADD</button>
      </form>
      :
      <div>
        <h2>{ownerName}</h2>
        <button onClick={handleChangeOwner}>Change Owner</button>
        </div>
        }
      <form onSubmit={handleAddCat}>
        <input type="text" name="name" placeholder="Name of the cat" />
        <input type="text" name="city" placeholder="city" />
        <button type="submit">ADD</button>
      </form>
      {kitties.map((cat: any, i) => {
        return <CatRow key={cat._id} cat={cat} />;
      })}
    </div>
  );
}

export default App;
