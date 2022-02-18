import "../components/Card.scss";

// function Card(prob:Cardprob) {
//   return <div className="card"> 
//       <img src={prob.img}  />
//       <p> {prob.title} </p>
//   </div>;
// }

// export default Card;

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
  const [color, setcolor] = useState('yellow'); // useState(initial value);
 // let counter2 = 0;

  function handlcolor() {
    var letters = '0123456789ABCDEF';
    let newColor:string = '#';
    for (var i = 0; i < 6; i++) {
        newColor += letters[Math.floor(Math.random() * 16)];
    }
    setcolor(newColor);
  }

  // function handleAddCounter2(){
  //   counter2++;
  //   console.log(counter2)
  // }
console.log(color);
  return (
    <div className="card">
            <h3 style={{backgroundColor:'red'}}></h3>
      <button onClick={handlcolor} style={{backgroundColor:color}}> hello</button>
    </div>

  );
}

export default Card;

