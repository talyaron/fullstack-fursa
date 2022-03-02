import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.scss';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [kittens, setKittens] = useState([])

  useEffect(()=>{

    //fetch kittens
    fetch('/get-all-kitens')
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setKittens(data.kittens);
    }).catch(err=>{
      console.error(err);
    })
  },[])

  function addKitten(ev: any) {
    ev.preventDefault();
    const form = ev.target;
    const obj: any = { name: form[0].value, city: form[1].value, street: form[2].value }
    axios.post('/add-newKitten', {name: form[0].value, city: form[1].value, street: form[2].value})
      .then(data => {
        console.log(data);
      }).catch(err => {
        console.error(err);
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={addKitten}>
          <input type="text" placeholder='insert kitten name' name='kittenName' />
          <input type="text" name="city" placeholder='insert city' />
          <input type="text" name="street" placeholder='insert street' />
          <button type='submit'>Add</button>
        </form>
        <h1>Kittens</h1>
        {kittens.map((kity: any) => {
          return <p key={kity._id}>{kity.name}</p>
        })}
      </header>
    </div>
  );
}

export default App;
