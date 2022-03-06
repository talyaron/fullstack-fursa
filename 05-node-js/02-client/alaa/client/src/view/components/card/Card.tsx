import '../card/Card.scss'
import { useState } from "react";

interface CardProp {
  info: {

    name: string;
    price: number;
    quantity: number;
    description: string;
    Url: string
  };
}






function Card(prop: CardProp) {
  const { name, price, quantity, description, Url } = prop.info;
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
        <div style={{ backgroundColor: color }} onClick={generateRandomColor} > click on me</div>
        <h3>name : {name}</h3>
        <p>price : {price}</p>
        <p>quantity : {quantity}</p>
        <p>description : {description}</p>
        <img src={Url} alt="" />
        <input onKeyUp={moveInput}></input>
            <div>{mytext}</div>

      </div>
  );
}

export default Card;
