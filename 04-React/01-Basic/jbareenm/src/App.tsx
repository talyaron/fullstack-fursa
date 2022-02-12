import React, { useState } from 'react';
import './App.scss';
import Card from './view/components/Card/Card';
import Blog from './view/components/hubSpotBlog/Blog';

interface gucci {
  url: string;
  data: string;
}
const content: Array<gucci> = [
  { url: "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1521230417/528892_DRW00_9522_002_100_0000_Light-Womens-Rhyton-Gucci-logo-leather-sneaker.jpg", data: "brown bag" },
  { url: "https://tinyurl.com/6ubem2r3", data: "brown bag" },
  { url: "https://tinyurl.com/2p85rye9", data: "green bag" },
  { url: "https://cdn-images.farfetch-contents.com/13/43/39/56/13433956_21892413_300.jpg", data: "brown bag" }
]

function App() {

  const [color, setColor] = useState(Math.floor(Math.random() * 16777215).toString(16));

  function handleChangeColor() {
    let tempColor = color;
    console.log('before:', tempColor);
    tempColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setColor(tempColor);
    console.log('after:', tempColor);
  }

  return (
    <div className="App">
      <button onClick={handleChangeColor}>change color</button>
      <div className="circle" style={{ backgroundColor: color }}></div>
      {/* <Blog /> */}
      {/* {content.map((element, index) => {
        return(
          <Card key={index} url={element.url} data={element.data} />
        );
      })} */}
    </div>
  );
}

export default App;
