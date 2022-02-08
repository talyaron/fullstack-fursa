import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./view/components/Card";

interface card {
  title: string;
  img: string;
}
const array: Array<card> = [
  {
    title: "Helo",
    img: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg",
  },
  {    title: "Hi ",
  img: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg",},
  {    title: "My name is Rola",
  img: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg",},
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {array.map((card , index)=>{
          return <Card  key={index} img={card.img} title={card.title} />
        })
        }

      </header>
    </div>
  );
}

export default App;
