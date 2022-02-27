import "../components/Card.scss";
import { Hotel } from "../components/Mainpage";

function Card(prop: Hotel) {
  return (
    <div className="card">
      <img src={prop.images[0]} alt=""/>
      <p>{prop.name}</p>
      <p>{prop.country}</p>
      <p>{prop.stars}</p>
    </div>
  );
}

export default Card;
