import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import Index from'./view/components/Index';
function App() {
  const [api, setAPI] = useState([]);

  function getAPI() {
    return new Promise((resolve, reject) => {
      fetch(`https://jsonplaceholder.typicode.com/posts`)
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

    getAPI().then((e: any) => {
      setAPI(e);
      console.log(e);
    });
  }, []);


  return (
    <div className="App">
      <div className="App__photos">
        {api.map((e: any) => {
          return <Index key={e.id} title={e.title} body={e.body}></Index>
        })}
      </div>
    </div>
  );
}

export default App;
