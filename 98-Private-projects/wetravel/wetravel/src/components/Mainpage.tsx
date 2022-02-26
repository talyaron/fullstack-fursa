import "../components/Mainpage.scss";
import Rola from "../Images/Rola.jpeg";
import Search from "../Images/search_logo.png";
import Card from "./Card";
import Bottombar from "../components/Bottombar";
import Travelles from "./Travelers";
import { data } from "./Bottombar";
import { useEffect } from "react";
import axios from "axios";
import { useAppSelector } from "../hooks/hooks";
import { userEmail, userName } from "../reducers/userSlice";

interface Hotel {
  id: string;
  src: string;
  title: string;
}

export interface Flights {
  id: String,
  name: String,
  imgUrl: String,
  from: String,
  to: String,
}

export interface travelers {
  src: string;
  name: string;
  country: string;
}

const travelers: Array<travelers> = [
  {
    src: "https://qtxasset.com/quartz/qcloud1/media/image/2016-12/ethical%20traveler.jpg?VersionId=mIycdotTCoKNtVnW0d2g4wvfA.y.bqOw",
    name: "Jon Doe",
    country: "England",
  },
  {
    src: "https://qtxasset.com/quartz/qcloud1/media/image/2016-12/ethical%20traveler.jpg?VersionId=mIycdotTCoKNtVnW0d2g4wvfA.y.bqOw",
    name: "John Smith",
    country: "Italy",
  },
  {
    src: "https://qtxasset.com/quartz/qcloud1/media/image/2016-12/ethical%20traveler.jpg?VersionId=mIycdotTCoKNtVnW0d2g4wvfA.y.bqOw",
    name: "Moshe Doe",
    country: "Thailand",
  },
  {
    src: "https://qtxasset.com/quartz/qcloud1/media/image/2016-12/ethical%20traveler.jpg?VersionId=mIycdotTCoKNtVnW0d2g4wvfA.y.bqOw",
    name: "Moshe Doe",
    country: "Thailand",
  },
  {
    src: "https://qtxasset.com/quartz/qcloud1/media/image/2016-12/ethical%20traveler.jpg?VersionId=mIycdotTCoKNtVnW0d2g4wvfA.y.bqOw",
    name: "Moshe Doe",
    country: "Thailand",
  },
];
const arr: Array<Hotel> = [
  {
    id: "1",
    src: "https://www.melares.com/uploads/antalya-turkey749395439.jpg",
    title: "Antalya Lake",
  },
  {
    id: "2",

    src: "https://media.shichor.co.il/a87daa5f0aeb03962dbac774498bdc87.jpg",
    title: "Sirmione",
  },
  {
    id: "2",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
    title: "Paris Tower",
  },

  {
    id: "3",
    src: "https://cf.bstatic.com/xdata/images/hotel/max500/263858373.jpg?k=1818a9f40dbf631c2870111510af6d1eee39fd366d246da6a0b0875f1c87066a&o=&hp=1",
    title: "Las Vegas",
  },
  {
    id: "3",
    src: "https://cf.bstatic.com/xdata/images/hotel/max500/263858373.jpg?k=1818a9f40dbf631c2870111510af6d1eee39fd366d246da6a0b0875f1c87066a&o=&hp=1",
    title: "Las Vegas",
  },
];


function Mainpage() {

  const user_email = useAppSelector(userEmail);
  console.log(user_email);

  useEffect(() => {
    axios
      .get("http://localhost:3004/posts")
      .then(({ data }) => console.log(data));
  }, []);
  const name: data = { name: "Home" };
  return (
    <div className="wrapper">
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
            <a href="">See all</a>
          </div>

          <div className="list">
            {arr.map((hotel, index) => {
              return (
                <Card
                  key={index}
                  src={hotel.src}
                  id={hotel.id}
                  title={hotel.title}
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
                <Travelles
                  key={index}
                  src={traveler.src}
                  name={traveler.name}
                  country={traveler.country}
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
