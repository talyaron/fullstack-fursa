interface CardProp {
  name: string;
  width:number;
  height:number;
  thick:number;
  cardImg:string;
  
}

function Card(prop: CardProp) {
  return (
    <div className="card">
      <img src={prop.cardImg} alt="" />
      <h3>{prop.name}</h3>
      <p>width is: {prop.width}</p>
      <p>height is: {prop.height}</p>
      <p>thickness  is: {prop.thick}</p>

    </div>
  );
}
  
  export default Card;
  