import { useState } from "react";

interface CardProp {
  setGeneralCounter:any;
  genralCounter:any;
  info: {
    name: string;
    place: string;
    img: string;
  };
}

function Card(prop: CardProp) {
  const { name, place, img } = prop.info; 
  const {setGeneralCounter,genralCounter} = prop;

  //state
  const [counter, setCounter] = useState(0); // useState(initial value);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  let counter2 = 0;

  function handleAddCounter() {
    let tempCounter = counter;
    console.log("before:", tempCounter);
    tempCounter++;

    setCounter(tempCounter);
    // if(setGeneralCounter) setGeneralCounter(tempCounter);
    if(setGeneralCounter) setGeneralCounter(genralCounter + 1);
    console.log("after:", tempCounter);
  }

  function handleAddCounter2() {
    counter2++;
    console.log(counter2);
  }

  function handleMouseOver(ev: any) {
    // console.log(ev)
    try {
      // console.log(ev.pageX, ev.pageY);
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

  return (
    <div className="card" onMouseOver={handleMouseOver} onContextMenu={handelRightClick}>
      <img src={img} alt={place} />
      <h3 style={{ backgroundColor: "red" }}>{name}</h3>
      <p>
        <span>X: {mousePosition.x}</span>
        <span>; Y: {mousePosition.y}</span>
      </p>
      <p>Lives in: {place}</p>
      <button onClick={handleAddCounter}>{counter}</button>
      <button onClick={handleAddCounter2}>Counter2: {counter2}</button>
      <input type="text" id='someId' onKeyUp={handleInput}/>
    </div>
  );
}

export default Card;
