import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import Card from './view/components/card/card'

function App() {
  const [photos, setPhotos] = useState([]);

  function getPhotos() {
    return new Promise((resolve, reject) => {
      fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then((response) => response.json())
        .then((json) => {
          resolve(json);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  useEffect(() => {
    console.log("use effect");

    getPhotos().then((e: any) => {
      setPhotos(e.slice(0, 100));
      console.log(e.slice(0, 100));
    });
  }, []);


  return (
    <div className="App">
      <div className="App__photos">
        {photos.map((e: any) => {
          return <Card key={e.id} img={e.url} title={e.title}></Card>
        })}
      </div>
    </div>
  );
}

export default App;
