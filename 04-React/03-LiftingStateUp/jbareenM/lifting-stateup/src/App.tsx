import React, { useEffect, useState } from 'react';
import './App.css';
import Item from './view/components/Item/Item';
import Card from './view/pages/Card/Card';
import Store from './view/pages/Store/Store';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAlbums();
  }, []);

  function getAlbums() {
    return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => {
          resolve(json);
          setData(json);
        }).catch(err => {
          reject(err);
        })
    });
  }

  return (
    <div className="App">
      {/* <Store /> */}
      <div className="dataConatiner">
        {data.map((album:any, index) => {
          return (
            <div key={index} style={{background: `url(${album.thumbnailUrl})`}} className="album">
              <p>albumId: {album.albumId}</p>
              <p>title: {album.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
