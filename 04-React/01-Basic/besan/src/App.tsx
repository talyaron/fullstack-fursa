
import logo from './logo.svg';
import './App.scss';
import Card from './view/components/Card/Card'

import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './view/pages/Home/Home'
import About from './view/pages/About/About'




const HerbMed:Array<Illness>=[{name: 'Skin-rash', HrbMed: 'Rash-Aid', Price: 150, img:'https://beleafpharma.co.il/wp-content/uploads/2020/02/Artboard-13.jpg'},{name: 'muscle-soreness', HrbMed: 'Awjaa', Price: 90, img:'https://beleafpharma.co.il/wp-content/uploads/2021/05/WhatsApp-Image-2021-04-21-at-18.08.53-1.jpeg'}];
interface Illness{
  name: string;
  HrbMed: string;
  Price: number;
  img:string;
}
function App() {
  return (
    <div className="App">
      <header className="App-header">

         <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
       </Routes>

        {HerbMed.map((HerbMed, index)=>{
          return<Card key= {index} name={HerbMed.name} HrbMed={HerbMed.HrbMed} img={HerbMed.img} Price={HerbMed.Price}/>
        })}

      </header>
    </div>
  );
}

export default App;
