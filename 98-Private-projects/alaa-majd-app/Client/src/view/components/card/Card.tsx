import '../card/Card.scss'
import { useState } from "react";
// import Cart from './view/pages/cart/Cart';
import axios from 'axios'; 


interface product {
  id:number;
  name: string;
  price: number;
  quantity: number;
  description: string;
  Url: string;
  // counter:number;
  }





function Card(prop: any) {

  const [counter, setCounter] = useState(prop.quantity); // useState(initial value);
  // const [q,setQ] = useState(0);

  function handleAddCounter(id:number):void {
    let tempCounter =counter ;
    tempCounter++;

    if(tempCounter>=7)
      tempCounter=7;
    setCounter(tempCounter);
    axios.patch(`http://localhost:3004/products1/${id}`,{ quantity:tempCounter}).then(({data})=>console.log(data));


  }
  function handleRemveCounter(id:number) {
    let tempCounter = counter;
    tempCounter--;
    if(tempCounter<0){
        tempCounter=0;
      }
      setCounter(tempCounter);
      axios.patch(`http://localhost:3004/products1/${id}`,{ quantity:tempCounter}).then(({data})=>console.log(data));
  }

  const {id, name, price,quantity, description,  Url} = prop;
  const [color, setColor] = useState('red');



  return (

      <div className="card"  style={{ backgroundColor: color }} >
     
        <img src={Url} alt="" />
        <h3>{name}</h3>
        <p>Price : {price}</p>
        <p><button onClick={()=>handleRemveCounter(id)}>-</button>  {counter} <button onClick={()=>handleAddCounter(id)}>+</button> </p>

      </div>
  );
}

export default Card;
