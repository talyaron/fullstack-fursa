import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Card from './view/components/Card/Card';

interface gucci{
  url: string;
  name: string;
}
const content:Array<gucci> = [
  {url: "data:image/jpeg;base64,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", name: "playstation 5"},
  {url: "https://tinyurl.com/6ubem2r3", name: "GG Marmont reversible belt"},
  {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJR3mBI66Ra3hawx-WH32swb7T9oUu9AvElR9dCMPjEEEVa4w48BlJ3NlD1IDkpA5GVxM&usqp=CAU", name: "Xbox Series X – Full Kit"},
  {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9rNubeNIVkXEdHybJHdXgBkaS1pzq_gmmAg&usqp=CAU", name: "Used wii ( 32 screen included)"}
]

function App() {
  return (
    <div className="App">
      {content.map((element, index) => {
        return(
          <Card key={index} url={element.url} name={element.name} />
        );
      })}
    </div>
  );
}

export default App;
