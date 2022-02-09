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

  //state
  const [counter, setCounter] = useState(0); // useState(initial value);
  let counter2 = 0;

  function handleAddCounter() {
    let tempCounter = counter;
    console.log('before:',tempCounter);
    tempCounter++;
   
    setCounter(tempCounter);
    console.log('after:',tempCounter);
  }

  function handleAddCounter2(){
    counter2++;
    console.log(counter2)
  }

  return (
    <div className="card">
      <img src={img} alt={place} />
      <h3>{name}</h3>
      <p>Lives in: {place}</p>
      <button onClick={handleAddCounter}>{counter}</button>
      <button onClick={handleAddCounter2}>Counter2: {counter2}</button>
    </div>
  );
}

export default Card;
