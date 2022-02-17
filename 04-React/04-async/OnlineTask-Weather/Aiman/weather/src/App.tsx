import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { useEffect, useState } from "react";
import Api from "./components/Api";
import Ajv from "ajv";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const ajv = new Ajv();
export interface weather {
  city: string;
  src: string;
}
export interface array {
  arr: any;
}
const api3 = {
  key: "07532edf67c74158bf3194746221502",
  base: "http://api.weatherapi.com/v1/current.json?key=07532edf67c74158bf3194746221502",
};
const arr: Array<weather> = [
  {
    city: "Tel aviv",
    src: "https://i0.wp.com/www.touristisrael.com/wp-content/uploads/2020/06/Best-areas-to-stay-in-Tel-Aviv-scaled-e1593008399620.jpg?fit=1506%2C1000&ssl=1",
  },
  {
    city: "London",
    src: "https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/thames_copyright_visitlondon_antoinebuchet640x360.jpg?mw=640&hash=27AEBE2D1B7279A196CC1B4548638A9679BE107A",
  },
  {
    city: "Las vegas",
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/01/00/2b/the-strip.jpg?w=600&h=400&s=1",
  },
];
function App() {
  const {cityid} = useParams();
  console.log(cityid);
  return (
    <div className="App">
      <nav>
        <Link to="/Tel aviv" >Tel Aviv</Link>
        <Link to="/London" >London </Link>
        <Link to="/Las vegas">Las Vegas</Link>
      </nav>
      <Api arr={arr} />
    </div>
  );
}
export default App;
