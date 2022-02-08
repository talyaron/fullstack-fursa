interface CardProp {
  name: string;
  price:number;
  quantity:number;
  description:string;
  Url:string
}

function Card(prop: CardProp) {
  return (
  <div className="warpper">
    <div className="card">
      <h3>name : {prop.name}</h3>
      <p>price : {prop.price}</p>
      <p>quantity : {prop.quantity}</p>
      <p>description : {prop.description}</p>
      <img src={prop.Url} alt="" />
    </div>
    </div>
  );
}

export default Card;
