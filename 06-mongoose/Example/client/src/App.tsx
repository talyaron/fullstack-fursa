import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import CatRow from "./CatRow";

function App() {
  const [kitties, setKitties] = useState([]);
  const [ownerName, setOwnerName] = useState("");
  const [ownerId, setOwnerId] = useState("");
  const [ownerCity, setOwnerCity] = useState("");

  useEffect(() => {
    axios.get("/cats/get-all-kitens").then(({ data }) => {
      console.log(data);
      setKitties(data);
    });
  }, []);

  const handleAddOwner = (ev: any) => {
    ev.preventDefault();

    try {
      const name = ev.target.elements.name.value;
      const id = ev.target.elements.id.value;
      const city = ev.target.elements.city.value;
      console.log(name, id);
      if (name && id) {
        setOwnerName(name);
        setOwnerId(id);
        setOwnerCity(city);
        axios
          .post("/owenrs/add-owner", { id, name, city })
          .then(({ data }) => {
            console.log(data);
          })
          .catch((err) => {
            console.error(err);
          });
        ev.target.reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddCat = (ev: any) => {
    ev.preventDefault();

    try {
      const name = ev.target.elements.name.value;
      const city = ev.target.elements.city.value;
      console.log(name, city, ownerId, ownerCity, ownerName);
      axios.post("/cats/add-cat", {
        name,
        city,
        ownerId,
        ownerCity,
        ownerName,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeOwner = () => {
    console.log("change owner");
    setOwnerId("");
    setOwnerName("");
    setOwnerCity("");
  };

  const handleRegister = async (ev:any)=>{
    ev.preventDefault();


    const name = ev.target.elements.name.value;
    const password = ev.target.elements.password.value;

    const results = await axios.post('/users/register',{name, password})
    console.log(results.data)
  }

  const handleGetPrivateInfo = async()=>{
    const {data} = await axios.get('/users/privateInfo');

    console.log(data)
  }

  return (
    <div className="App">
      {ownerId.length === 0 ? (
        <form onSubmit={handleAddOwner}>
          <input type="text" name="name" placeholder="Name of Owner" />
          <input type="text" name="id" placeholder="id of the woner" />
          <input type="text" name="city" placeholder="id of the woner" />
          <button type="submit">ADD</button>
        </form>
      ) : (
        <div>
          <h2>{ownerName}</h2>
          <button onClick={handleChangeOwner}>Change Owner</button>
        </div>
      )}
      <form onSubmit={handleAddCat}>
        <input type="text" name="name" placeholder="Name of the cat" />
        <input type="text" name="city" placeholder="city" />
        <button type="submit">ADD</button>
      </form>
      <hr />
      <form onSubmit={handleRegister}>
        <input type="text" name="name" placeholder="user name" />
        <input type="text" name="password" placeholder="password" />
        <button type="submit">Register</button>
      </form>
      <button onClick={handleGetPrivateInfo}>GET INFO</button>
      {kitties.map((cat: any, i) => {
        return <CatRow key={cat._id} cat={cat} />;
      })}
    </div>
  );
}

export default App;
