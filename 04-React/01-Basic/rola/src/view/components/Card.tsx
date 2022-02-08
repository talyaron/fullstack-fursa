import "../components/Card.scss";

interface Cardprob{
    title:string;
    img:string;
}
function Card(prob:Cardprob) {
  return <div className="card"> 
      <img src={prob.img}  />
      <p> {prob.title} </p>
  </div>;
}

export default Card;
