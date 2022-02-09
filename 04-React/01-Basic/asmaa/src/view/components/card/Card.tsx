interface CardProp {
  info:{
  name: string;
  img:string;
  };
}

function Card(prop: CardProp) {
  const {name, img} = prop.info;
  return (
    <div className="card">
      <h3>{name}</h3>
    
    </div>
  );
}

export default Card;
