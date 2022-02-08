interface CardProp {
  title: string;
  place:string;
  
}

function Card(prop: CardProp) {
  return (
    <div className="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQxRq9GpCZAc2XhYAxfCD5WKHzbJToninLQw&usqp=CAU" alt="" />
      <h3>{prop.title}</h3>
      <p>Lives in: {prop.place}</p>
    </div>
  );
}
  
  export default Card;
  