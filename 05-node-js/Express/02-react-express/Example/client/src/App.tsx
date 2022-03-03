import axios from "axios";
import { useState, useEffect } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { getUsersAsync, usersSelect } from "./features/users/usersSlice";
import { useAppDispatch, useAppSelector } from "./app/hooks";

function App() {
 
  const usersState = useAppSelector(usersSelect)
  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(getUsersAsync());
  },[])
  

  function handleAddUser(ev: any) {
    ev.preventDefault();
    try {
      const user = ev.target.elements.name.value;
      if (!user) throw new Error("No use in input");
<<<<<<< HEAD
      axios.post('/add-user', { user }).then(res => {
        console.log(res);
        if (res.data.users) {
          setUsers(res.data.users);
        }
      }).catch(err => console.error(err))
=======
      axios
        .post("/add-user", { user })
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
>>>>>>> dev
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <div className="users">
          {usersState.map((user: any, index: number) => {
            console.log(user)
            return (
              <p key={index}>
                {user.name} with id {user.id}
              </p>
            );
          })}
        </div>
        <form onSubmit={handleAddUser}>
          <input type="text" name="name" placeholder="enter user name" />
          <button type="submit">ADD</button>
        </form>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer">
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer">
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer">
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer">
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
