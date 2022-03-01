import { useState } from "react";
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
//import {update, getJokeAsync} from '../../../app/reducers/textSlice'; 
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectBag,
} from '../../../app/reducers/bagSlice';


interface CardProp {
  info: {
    name:string;
    price:number;
    img:string;
  }
}



function Card(prop: CardProp) {
     const count = useAppSelector(selectBag);
  const dispatch = useAppDispatch();
  
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
function handleAdd(){

 // alert("added to favourites")
  
}

  return (
    <div style = {{backgroundColor:color}} className="card" onClick={handleAddCounter}>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <button  className="card_add" type="button" onClick={() => dispatch(increment())}>add to favourites</button>
    </div>
  );
} 

export default Card;
