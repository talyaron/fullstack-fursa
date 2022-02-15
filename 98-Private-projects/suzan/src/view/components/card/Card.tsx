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
    const [randomColor, setRandomColor] = useState('white')
    const names = ['Suzan1', 'Mona1', 'Tal1', 'Suzan2', 'Mona2', 'Tal2']
    const [text, setText] = useState('')

    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    function handleClick(){
      setRandomName(names[Math.floor(Math.random()*names.length)])
      setRandomColor(getRandomColor())
    }

    function handleText(ev:any){
      setText(ev.target.value)
    }

    const {image, title} = prop.info
      return (
        <div className="myCard" style={{backgroundColor:randomColor}}>
            <img src={image} alt="" />
            <h5>{title}</h5>
            <button onClick={handleClick}> 
              {randomName}
            </button>
            <p className="input">{text}</p>
            <input type="text" onKeyUp={handleText} />
        </div>
      );
  }
  
  export default MyCard;