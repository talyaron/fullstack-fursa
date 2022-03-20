import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import axios from 'axios';

function App() {
  const [fishes, setFishes] = useState<Array<any>>([]);

  useEffect(() => {
    axios.post('/sqlTest_LessThan', { age: 2 }).then(({ data }: any) => {
      console.log(data);
      setFishes(data.results);
    })
  }, [])

  async function handleAddFish(ev: any) {
    ev.preventDefault();
    const { data } = await axios.post('/sqlTest', { name: ev.target.elements.name.value, age: ev.target.elements.age.value })
    console.log(data);
  }

  return (
    <div className="App">
      <form onSubmit={handleAddFish} className="insertFish">
        <label>insert fish: </label>
        <input type="text" name="name" placeholder='name' />
        <input type="number" name="age" placeholder='age' />
        <input type="submit" value="add" />
      </form>

      {fishes.map((fish, index) => {
        return (
          <div key={index} className="fish">
            <span style={{ color: "red" }}>name: </span>{fish.fish_name} <span style={{ color: "red" }}>age: </span>{fish.fish_age}
          </div>
        );
      })}
    </div>
  );
}

export default App;
