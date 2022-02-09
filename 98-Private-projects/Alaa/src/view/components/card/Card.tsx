import '../card/Card.scss'
import { useState } from "react";

interface CardProp {
  info: {

    name: string;
    price: number;
    description: string;
    Url: string
  };
}






function Card(prop: CardProp) {

  const [counter, setCounter] = useState(0); // useState(initial value);
  let counter2 = 0;

  function handleAddCounter() {
    let tempCounter = counter;
    tempCounter++;

    if(tempCounter>=7)
      tempCounter=7;
    setCounter(tempCounter);
  }
  function handleRemveCounter() {
    let tempCounter = counter;
    tempCounter--;
    if(tempCounter<0){
        tempCounter=0;
      }
      setCounter(tempCounter);
  }

  const { name, price, description, Url } = prop.info;
  const [color, setColor] = useState('red');
  function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var newColor = '#';
    for (var i = 0; i < 6; i++) {
        newColor += letters[Math.floor(Math.random() * 16)];
    }
    setColor(newColor);

}
const [mytext, setmytext] = useState('hi , alaa wants to write me');
    function moveInput(e: any) {
        try {
            setmytext(e.target.value)
        } catch (error) {
            console.error(error)
        }
    }


  return (

      <div className="card"  style={{ backgroundColor: color }} onClick={generateRandomColor} >
     
        <img src={Url} alt="" />
        <h3>{name}</h3>
        <p>Price : {price}</p>
        <p><button onClick={handleRemveCounter}>-</button>  {counter} <button onClick={handleAddCounter}>+</button> </p>
        {/* <p>description : {description}</p> */}
        
        {/* <input onKeyUp={moveInput}></input> */}
            {/* <div>{mytext}</div> */}

      </div>
  );
}

export default Card;
