import { useState } from "react";


interface CardProp {
  info: {
    name:string;
    price:number;
    img:string;
  }
}



function Card(prop: CardProp) {
 
  
  const{name, price,img} = prop.info;
  const [color, setColor] = useState('red'); // useState(initial value);

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function handleAddCounter() {
  
    setColor(getRandomColor());
    
  }

  return (
    <div style = {{backgroundColor:color}} className="card" onClick={handleAddCounter}>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>Price: {price}</p>
    </div>
  );
} 

export default Card;
