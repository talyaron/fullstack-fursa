import React, { useState, useEffect } from "react";
import "./style.css";
import Ajv from "ajv";

const ajv = Ajv();
const albumsSchema = {
  type: "object",
  properties: {
    id: { type: "integer" },
    title: { type: "string" },
    userId: { type: "integer" },
  },
  required: ["id", "title","userId"],
  additionalProperties: false,
};

const dataSchema = {
  type: "array",
  items: albumsSchema,
};
const validate = ajv.compile(dataSchema);

interface LandingProps {
  setCounter: any;
  counter: any;
}

export default function Landing(props: LandingProps) {
  const [counter, setCounter] = useState(0);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    console.log("use effect");

    getAlbums().then((albumsDB: any) => {
      setAlbums(albumsDB);
      console.log(albumsDB);
     
    }).catch(err=>{
      console.log(err)
    });
  }, []);

  function handleCounter() {
    setCounter(counter + 1);
  }

  function getAlbums() {
    return new Promise((resolve, reject) => {
      fetch(`https://jsonplaceholder.typicode.com/albus`)
        .then((response) => response.json())
        .then((albumsDB) => {
          const valid = validate(albumsDB);
          console.log(valid);
          if (valid) resolve(albumsDB)
          else reject(validate.errors);
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
      <button onClick={handleCounter}>{counter}</button>
      <div className="albums">
        {albums.map((album: any, i) => {
          return (
            <div key={album.id} className="album">
              <h3>{album.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
