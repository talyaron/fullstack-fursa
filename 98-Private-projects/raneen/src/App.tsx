import './App.scss';
import React from 'react';
//components
import Card from './view/components/card/Card';
import Mainbar from './view/components/menu/menu';
import Coats from './view/pages/Coats/Coats';


const clothes:Array<item> = [{name:'WOOL BLEND HIGH NECK COAT', price:500,img:'https://static.zara.net/photos///2022/V/0/1/p/2096/289/802/2/w/830/2096289802_1_1_1.jpg?ts=1637256490476'}
,{name:'COAT WITH DETACHABLE FAUX FUR DETAIL ON THE COLLAR',price:200, img:'https://static.zara.net/photos///2022/V/0/1/p/2179/289/704/2/w/1126/2179289704_1_1_1.jpg?ts=1640000139595'}];
interface item{
  name:string;
  price:number;
  img:string;
}

interface prob{
  children: React.ReactNode;
  open: false;
  onClose:()=>void;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Mainbar></Mainbar>
    
    
     
      {clothes.map((item1, index)=>{
        const {name,price,img}= item1;
        return <Card key={index} info ={{name,price,img} } />
      })}
      </header>
      
    </div>
  );
}

export default App;
