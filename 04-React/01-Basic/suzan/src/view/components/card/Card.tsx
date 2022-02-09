import { useState } from "react";
import { isPropertySignature } from "typescript";
import { string } from "yargs";

interface CardProp {
  title: string;
  place: string;
}

function Card(prop: CardProp) {
    return (
      <div className="card">
        <h3>{prop.title}</h3>
        <p>Lives in: {prop.place}</p>
      </div>
    );
  }

  interface MyCardProp {
    info:{
      image: string;
      title: string;
    };
      
  }

  function MyCard(prop: MyCardProp) {
    const [randomName, setRandomName] = useState('Suzan')
    const names = ['Suzan1', 'Mona1', 'Tal1', 'Suzan2', 'Mona2', 'Tal2']

    function handleClick(){
      setRandomName(names[Math.floor(Math.random()*names.length)])
    }

    const {image, title} = prop.info
      return (
        <div className="myCard">
            <img src={image} alt="" />
            <h5>{title}</h5>
            <button onClick={handleClick}> 
              {randomName}
            </button>
        </div>
      );
  }
  
  export default MyCard;