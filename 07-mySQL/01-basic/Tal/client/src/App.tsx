import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import CatRow from "./CatRow";

function App() {
  const [kitties, setKitties] = useState([]);
  const [fishes, setFishes] = useState([]);
  const [ownerName, setOwnerName] = useState("");
  const [ownerId, setOwnerId] = useState("");

  useEffect(() => {
    // axios.get("cats/get-all-cats").then(({ data }) => {
    //   console.log(data);
    //   setKitties(data);
    // });
    getFishes().then((data: any) => {
      setFishes(data);
    });
  }, []);

  const handleRegister = async (ev: any) => {
    ev.preventDefault();
    try {
      const city = ev.target.elements.city.value;
      const name = ev.target.elements.name.value;
      const password = ev.target.elements.password.value;

      const results = await axios.post("/users/register", {
        name,
        password,
        city,
      });
      console.log(results);
      const { data } = results;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async (ev: any) => {
    ev.preventDefault();
    try {
      const name = ev.target.elements.name.value;
      const password = ev.target.elements.password.value;

      const results = await axios.post("/users/login", {
        name,
        password,
      });
      console.log(results);
      const { data } = results;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetPrivateInfo = async () => {
    const { data } = await axios.get("/users/privateInfo");

    console.log(data);
  };

  const handleAddFish = async (ev: any) => {
    ev.preventDefault();
    const fishName = ev.target.elements.name.value;
    if (fishName) {
      const { data } = await axios.post("/add-new-fish", { name: fishName });
      console.log(data);
      getFishes().then((data:any)=>{
        setFishes(data)
      })
    }
  };

  function getFishes() {
    return new Promise((resolve, reject) => {
      axios
        .get("/get-all-fishes")
        .then(({ data }) => {
          if (data) {
            console.log(data);

            resolve(data.fishes);
          } else {
            reject("no data");
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  return (
    <div className="App">
      {ownerId.length === 0 ? (
        <form>
          <input type="text" name="name" placeholder="Name of Owner" />
          <input type="text" name="id" placeholder="id of the woner" />
          <button type="submit">ADD</button>
        </form>
      ) : (
        <div>
          <h2>{ownerName}</h2>
          <button>Change Owner</button>
        </div>
      )}
      <form>
        <input type="text" name="name" placeholder="Name of the cat" />
        <input type="text" name="city" placeholder="city" />
        <button type="submit">ADD</button>
      </form>
      <hr />
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" placeholder="user name" />
        <input type="text" name="city" placeholder="city" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Register</button>
      </form>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" name="name" placeholder="user name" />

        <input type="password" name="password" placeholder="password" />
        <button type="submit">Login2</button>
      </form>
      <button onClick={handleGetPrivateInfo}>GET INFO</button>
      {kitties.map((cat: any, i) => {
        return <CatRow key={cat._id} cat={cat} />;
      })}
      <hr />
      <h2>Fishes</h2>
      <form onSubmit={handleAddFish}>
        <input type="text" name="name" placeholder="Fish name" />
        <input type="submit" value="ADD Fishes" />
      </form>
      {fishes.map((fish: any) => {
        return <p key={fish.fish_id}>{fish.fish_name}</p>;
      })}
    </div>
  );
}

export default App;
