import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import CatRow from "./CatRow";

function App() {
  const [kitties, setKitties] = useState([]);
  const [ownerName, setOwnerName] = useState("");
  const [ownerId, setOwnerId] = useState("");
  const [catsUnder2, setCatsUnder2] = useState([{ "cat_id": "", "name": "", "age": "" }])
  useEffect(() => {
    // axios.get("cats/get-all-cats").then(({ data }) => {
    //   console.log(data);
    //   setKitties(data);
    // });
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
  async function addcat(e: any) {
    e.preventDefault()
    console.log(e.target.elements[0].value)
    const response = await axios.post("/users/add-cat", { "name": e.target.elements[0].value, "age": e.target.elements[1].value })
    console.log(response.data)
  }
  const handleGetPrivateInfo = async () => {
    const { data } = await axios.get("/users/privateInfo");

    console.log(data);
  };
  async function getcats(e: any) {
    e.preventDefault();
    const response = await axios.get("/users/get-cat-2")
    const { results } = response.data
    console.log(results)
    setCatsUnder2(results)
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
      <form onSubmit={addcat}>
        <input type="text" name="cat" placeholder="cat name" />
        <input type="text" name="age" placeholder="cat age" />
        <button type="submit">ADD</button>
      </form>
      <div><button type="submit" onClick={getcats}>get All cats under 2</button></div>
      <div>
        {catsUnder2.map((e, index) => {
          return <div key={e.cat_id}><p>{e.name} {e.age}</p></div>
        })}
      </div>
    </div>
  );
}

export default App;
