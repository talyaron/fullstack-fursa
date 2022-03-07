import "../views/Card.scss";
import { isPropertySignature } from "typescript";
import { useState } from "react";
import { useParams , Link } from "react-router-dom";
interface CardProp {
  info: {
    src: string;
    title: string;
    id: string;
  };
}
let tempText: string = "";
function Card(prop: CardProp) {
  const { src, title, id } = prop.info;
  const [text, setText] = useState("");
  const {id2} =  useParams();
  function handleChange(eve: any) {
    console.log(eve.target.value);
    tempText = eve.target.value;
    setText(tempText);
  }
  return (
    <Link to={`/cardlist/${id}`}>
    <div className="card">
      <img src={src} alt="" />
      <p> {title}</p>
      <h1> {tempText} </h1>
      <input className="input" onChange={handleChange} id="in"></input>
    </div>
    </Link>
  );
}
export default Card;
