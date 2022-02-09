import '../views/Card.scss'
import { isPropertySignature } from "typescript";
interface CardProp {

  info : {
    src:string;
    title: string;
  }
 
}

function Card(prop: CardProp) {
  const {src , title} = prop.info;
  return (  
    <div  className="card">
      <img src={src} alt="" />
      <p> {title}</p>
    </div>
    )
  
}

export default Card;
