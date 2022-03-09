import React, { useState, useEffect } from 'react';
import './App.scss';

//components
import Card from './view/components/card/Card';
import axios from 'axios'
const students: Array<Place> = [
  { name: 'Saleem', place: 'Mashad', img: 'https://i0.wp.com/www.hoshvilim.com/wp-content/uploads/2009/08/757.jpg?resize=465%2C330&ssl=1' },
  { name: 'Mona', place: "Nazereth", img: 'https://img.haarets.co.il/img/1.9037848/4234772148.jpg?width=1200&height=1200' },
  { name: 'Saleem', place: 'Mashad', img: 'https://i0.wp.com/www.hoshvilim.com/wp-content/uploads/2009/08/757.jpg?resize=465%2C330&ssl=1' },
  { name: 'Mona', place: "Nazereth", img: 'https://img.haarets.co.il/img/1.9037848/4234772148.jpg?width=1200&height=1200' }
];

interface Place {
  name: string;
  place: string;
  img: string;
}

function App() {
  const [genralCounter, setGeneralCounter] = useState(0)
  const [kitttens, setKittens] = useState([]);
  const [cat, setCat] = useState("")
  useEffect(() => {
    //fetch kittens
    console.log("what")
    fetch('/get-all-kitens')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setKittens(data);
      }).catch(err => {
        console.error(err);
      })
  }, [])
  function insert_kitty() {
    const response = axios.post('/add-kitty', { name: cat })
    console.log(response)
  }
  function handleChange(e: any) {
    setCat(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Number of counts:{genralCounter}</h1>
        <h1>here is our Kittens</h1>
        {kitttens.map((kity: any) => {
          return <p key={kity._id}>{kity.name}</p>
        })}
        <form onSubmit={insert_kitty}>
          <input onKeyUp={handleChange} />
          <button name="submit"></button>
        </form>

      </header>
    </div>
  );
}

export default App;
