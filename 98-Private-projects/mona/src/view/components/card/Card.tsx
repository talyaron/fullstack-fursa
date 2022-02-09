interface CardProp {
  wood:{
  name: string,
  width:number,
  height:number,
  thick:number,
  cardImg:string
  };
}

function Card(prop: CardProp) {
  const {name,width,height,thick,cardImg}=prop.wood;

  return (
    <div className="card">
      <img src={cardImg} alt="" />
      <h3>{name}</h3>
      <p>width is: {width}</p>
      <p>height is: {height}</p>
      <p>thickness  is: {thick}</p>

    </div>
  );
}
  
  export default Card;
  