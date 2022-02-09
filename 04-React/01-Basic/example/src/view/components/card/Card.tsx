interface CardProp {
  title: string;
  place:string;
}

function Card(prop: CardProp) {
  return (
    <div className="card">
      hi
      <h3>{prop.title}</h3>
      <p>Lives in: {prop.place}</p>
    </div>
  );
}

export default Card;
