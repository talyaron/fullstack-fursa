import './App.scss';
import React from 'react';
//components
import Card from './view/components/card/Card';
import Mainbar from './view/components/menu/menu';


const clothes:Array<item> = [{name:'coat', price:500,img:'https://media.dior.com/couture/ecommerce/media/catalog/product/9/X/1586461506_841M55A3332_X1700_E01_GHC.jpg?imwidth=800'}
,{name:'shirt',price:200, img:'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/4c/P00533289.jpg'}];
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
        return <Card key={index} info ={{name,price,img}} />
      })}
      </header>
      
    </div>
  );
}

export default App;
