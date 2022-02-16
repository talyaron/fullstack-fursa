import React, { useState, useEffect } from "react";

import "./style.css";

import logoImg from "../../assets/images/icon.svg";
import landingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/SignUp.svg";
import logIn from "../../assets/images/icons/login-ico.png";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";
import { Link } from "react-router-dom";

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
      console.log(albumsDB)
    });
  }, []);

  function handleCounter() {
    setCounter(counter + 1);
  }

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
      <button onClick={handleCounter}>{counter}</button>
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
