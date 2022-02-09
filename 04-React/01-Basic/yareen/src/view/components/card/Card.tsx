interface CardProp {
  title: string;
  place:string;
}

function Card(prop: CardProp) {
  return (
    <div className="card">
      <h3>{prop.title}</h3>
      <p>Lives in: {prop.place}</p>
    </div>
  );
}

export default Card;
