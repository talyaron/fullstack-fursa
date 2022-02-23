import './Card.scss';
import { useState } from "react";

interface CardProp {
  info: {
    name: string;
    place: string;
    img: string;
  };
}

function Card(prop: CardProp) {
  const { name, place, img } = prop.info;
  const [color, setColor] = useState('red');
  const arrOfNames: Array<string> = ['Asma', 'fraij', 'C', 'D', 'E'];
  const [randomName, setName] = useState(arrOfNames[0]);

  //state
  const [counter, setCounter] = useState(0); // useState(initial value);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  let counter2 = 0;


  function changeColor() {
      var letters = '0123456789ABCDEF';
      var newColor = '#';
      for (var i = 0; i < 6; i++) {
          newColor += letters[Math.floor(Math.random() * 16)];
      }
      setColor(newColor);

  }


  function changeName() {
    let newNum = Math.floor(Math.random() * 5)
    setName(arrOfNames[newNum])
}
  function handleAddCounter() {
    let tempCounter = counter;
    tempCounter++;
    setCounter(tempCounter);
  }


  function handleMouseOver(ev: any) {
    try {
      if (ev.pageX && ev.pageY) {
        setMousePosition({ x: ev.pageX, y: ev.pageY });
      }
    } catch (err) {
      console.error(err)
    }
  }

  function handelRightClick(ev:any){
    try {
      console.log(ev.type)
    } catch (error) {
      console.error(error)
    }
  }

  function handleInput(ev:any){
    try {
      console.log(ev.target.value)
    } catch (error) {
      console.error(error)
    }
  }

  const [mytext, setmytext] = useState('');
    function moveInput(e: any) {
        try {
            setmytext(e.target.value)
        } catch (error) {
            console.error(error)
        }
    }


  return (
    <div className="card" onMouseOver={handleMouseOver} onContextMenu={handelRightClick}>
      <div style={{ backgroundColor: color }} onClick={changeColor}>click on me</div>
      <p>
        <span>X: {mousePosition.x}</span>
        <span>; Y: {mousePosition.y}</span>
      </p>
      <button onClick={handleAddCounter}>{counter}</button>
      <div onClick={changeName}>{randomName}</div>
      <input onKeyUp={moveInput}></input>
      <div>{mytext}</div>
    </div>
  );
}

export default Card;
