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
      image: string;
      title: string;
  }

  function MyCard(prop: MyCardProp) {
      return (
        <div className="myCard">
            <img src={prop.image} alt="" />
            <h5>{prop.title}</h5>
        </div>
      );
  }
  
  export default MyCard;