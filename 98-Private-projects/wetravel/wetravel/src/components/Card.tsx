import "../components/Card.scss";

interface CardProp {
  id: string;
  src: string;
  title: string;
}
function Card(prop: CardProp) {
  const { id, src, title } = prop;
  return (
    <div className="card">
      <img src={src} alt=""/>
      <p>{title}</p>
    </div>
  );
}

export default Card;
