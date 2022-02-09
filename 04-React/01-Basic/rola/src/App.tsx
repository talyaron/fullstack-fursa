import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./view/components/Card";

// interface card {
//   title: string;
//   img: string;
// }
// const array: Array<card> = [
//   {
//     title: "Helo",
//     img: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg",
//   },
//   {    title: "Hi ",
//   img: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg",},
//   {    title: "My name is Rola",
//   img: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg",},
// ];

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       {array.map((card , index)=>{
//           return <Card  key={index} img={card.img} title={card.title} />
//         })
//         }

//       </header>
//     </div>
//   );
// }

// export default App;


const students:Array<Place> = [{name:'Saleem', place:'Mashad', img:'https://i0.wp.com/www.hoshvilim.com/wp-content/uploads/2009/08/757.jpg?resize=465%2C330&ssl=1'},{name:'Mona',place:"Nazereth", img:'https://img.haarets.co.il/img/1.9037848/4234772148.jpg?width=1200&height=1200'}];

interface Place{
  name:string;
  place:string;
  img:string;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {students.map((student, index)=>{
        const {name, place, img} = student; //deconstractor 

        return <Card key={index} info={{name, place, img}}/>
      })}
      </header>
    </div>
  );
}

export default App;
