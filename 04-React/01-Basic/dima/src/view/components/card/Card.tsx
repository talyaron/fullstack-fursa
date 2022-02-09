interface CardProp{
    link:string;
    title:string;
}

function Card(prop:CardProp) {
    return(
        <div className="card">
            <img src={prop.link}/>
            <h3>{prop.title}</h3>
        </div>
    );
}

export default Card;