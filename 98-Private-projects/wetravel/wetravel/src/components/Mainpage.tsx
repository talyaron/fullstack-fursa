import "../components/Mainpage.scss";
import Rola from "../Images/Rola.jpeg";
import Search from "../Images/search_logo.png";
import Card from "./Card";
import Bottombar from "../components/Bottombar";
import { data } from "./Bottombar";
import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/hooks";
import { userEmail, userName } from "../reducers/userSlice";
import Travelers from "./Travelers";
import faker from "@faker-js/faker";
import axios from "../axios/axios";
export interface Hotel {
  name: string;
  country: string;
  stars: number;
  images: string[];
}

export interface Flights {
  id: String;
  name: String;
  imgUrl: String;
  from: String;
  to: String;
}

export interface travelers {
  name: string;
  imgUrl: string;
  country: string;
  followers: number;
  events: [];
}


function Mainpage() {
  const [travelers, setTravelers] = useState<any[]>([]);
  const [hotels, setHotels] = useState<any[]>([]);

  
  useEffect(() => {
    async function get_travelers() {
      try {
        //get the travelers
        const response = await axios
          .get("/travelers/users")
          .then((res) => res.data);
        setTravelers([...response]);
        console.log(travelers);
        // get the hotels
        const addHotels = await axios
          .get("/travelers/hotels")
          .then((res) => res.data);
        setHotels([...addHotels]);
        console.log(hotels);
      } catch (error) {
        console.log(error);
      }
    }

    get_travelers();
  }, []);
  const user_email = useAppSelector(userEmail);
  const name: data = { name: "mainpage" };
  return (
    <div className="wrapper">
      {}
      <div className="mainpage">
        <div className="header">
          <div className="menu-icon">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
          <img src={Rola}></img>
        </div>
        <div className="down">
          <h1> Welcome to Travelers {user_email}</h1>
          <p>App connect with travel community.</p>
          <div className="search-bar">
            <div className="right-div">
              <img src={Search} style={{ color: "#ff4500" }}></img>
            </div>
            <div className="left-div">
              <p>Search for your destination</p>
              <div className="input__div">
                <p>From</p>
                <input type="text" />
                <p>To</p>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="grid__items">
          <div className="div_h">
            <h1>Right now at </h1>
            <a href="/post">See all</a>
          </div>

          <div className="list">
            {hotels.map((hotel, index) => {
              return (
                <Card
                  key={index}
                  stars={hotel.stars}
                  images={hotel.images}
                  name={hotel.name}
                  country={hotel.country}
                />
              );
            })}
          </div>
        </div>
        <div className="grid__items">
          <div className="div_h">
            <h1>Popular travelers</h1>
            <a href="">See all</a>
          </div>
          <div className="list">
            {travelers.map((traveler, index) => {
              return (
                <Travelers
                  key={index}
                  imgUrl={traveler.imgUrl}
                  name={traveler.name}
                  country={traveler.country}
                  followers={traveler.followers}
                  events={traveler.events}
                />
              );
            })}
          </div>
        </div>
      </div>

      <Bottombar name={name.name} />
    </div>
  );
}

export default Mainpage;
