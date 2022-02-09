// import React, { useState } from 'react';
// import './App.scss';
// import Card from './view/components/Card/Card';
// import Blog from './view/components/hubSpotBlog/Blog';

// interface gucci {
//   url: string;
//   data: string;
// }
// const content: Array<gucci> = [
//   { url: "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1521230417/528892_DRW00_9522_002_100_0000_Light-Womens-Rhyton-Gucci-logo-leather-sneaker.jpg", data: "brown bag" },
//   { url: "https://tinyurl.com/6ubem2r3", data: "brown bag" },
//   { url: "https://tinyurl.com/2p85rye9", data: "green bag" },
//   { url: "https://cdn-images.farfetch-contents.com/13/43/39/56/13433956_21892413_300.jpg", data: "brown bag" }
// ]

// function App() {

//   const persons: Array<string> = ["jbareen", "alaa", "yosef"];

//   const [color, setColor] = useState(Math.floor(Math.random() * 16777215).toString(16));

//   const [number, setNumber] = useState(0);

//   function handleChangeColor() {
//     let tempColor = color;
//     console.log('before:', tempColor);
//     tempColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
//     setColor(tempColor);
//     console.log('after:', tempColor);
//   }

//   function handleChangeName() {
//     setNumber(Math.floor(Math.random() * persons.length));
//   }

//   return (
//     <div className="App">
//       <button onClick={handleChangeColor}>change color</button>
//       <div className="circle" style={{ backgroundColor: color }}></div>
//       {/* <Blog /> */}
//       {content.map((element, index) => {
//         return(
//           <Card key={index} url={element.url} data={element.data} />
//         );
//       })}
//       <button onClick={handleChangeName}>change name</button>
//       <label onClick={handleChangeName}>{persons[number]}</label>
//     </div>
//   );
// }

// export default App;


import './App.scss';

//components
import Card from './view/components/Card/Card';

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
