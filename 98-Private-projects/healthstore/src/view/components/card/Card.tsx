import './Card.scss';
import { useState } from "react";

interface CardProp {
  info: {
    name: string;
    img: string;
  };
}

function Card(prop: CardProp) {
  const { name, img } = prop.info;
  const [text, settext] = useState('');
  function showName(e: any) {
      try {
        let text=name;
        settext(text)
      } catch (error) {
          console.error(error)
      }
  }

  return (
    <div className="card">
      <img onClick={showName} src={img} alt="" />
      <h4 className="name"> {text}</h4>
    </div>

  );
}

export default Card;
