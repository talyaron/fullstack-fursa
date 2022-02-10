import "../views/Card.scss";
import { isPropertySignature } from "typescript";
import { useState } from "react";
interface CardProp {
  info: {
    src: string;
    title: string;
  };
}
let tempText: string = "";
function Card(prop: CardProp) {
  const { src, title } = prop.info;
  const [text, setText] = useState("");
  function handleChange(eve: any) {
    console.log(eve.target.value);
    tempText = eve.target.value;
    setText(tempText);
  }
  return (
    <div className="card">
      <img src={src} alt="" />
      <p> {title}</p>
      <h1> {tempText} </h1>
      <input className="input" onChange={handleChange} id="in"></input>
    </div>
  );
}
export default Card;
