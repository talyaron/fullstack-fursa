import React, { useState, useEffect } from "react";



interface AlbumsProp {
  setCounter: any;
  counter: any;
}

export default function Index(props: AlbumsProp) {
  const [counter, setCounter] = useState(0);
  const [albums, setAlbums] = useState([]);
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
  


  useEffect(() => {
    console.log("use effect");

    getAlbums().then((albumsDB: any) => {
      setAlbums(albumsDB);
      console.log(albumsDB)
    });
  }, []);




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




