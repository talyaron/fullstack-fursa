import React, { useState, useEffect } from "react";
//import newCard '../../components/newCard/productCard';
//import "./style.css";


export default function Data() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getAlbums().then((albumsDB: any) => {
      setAlbums(albumsDB);
      console.log(albumsDB)
    });
  }, []);


  function getAlbums() {
    return new Promise((resolve, reject) => {
      fetch(`https://jsonplaceholder.typicode.com/albums`)
        .then((response) => response.json())
        .then((json) => {
          resolve(json);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  console.log("used the function");
  return (
    <div id="page-landing">
      <h1>Albums</h1>
      <div className="albums">
        {albums.map((album:any, i) => {
          return <div key={album.id} className="album">
            <h3>{album.title}</h3>
          </div>;
        })}
      </div>
    </div>
  );
}
