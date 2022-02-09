import '../views/Card.scss'
import { isPropertySignature } from "typescript";
interface CardProp {
  src:string;
  title: string;
}

function Card(prop: CardProp) {
  return (
    <div  className="card">
      <img src={prop.src} alt="" />
      <p> {prop.title}</p>
    </div>
    )
  
}

export default Card;
