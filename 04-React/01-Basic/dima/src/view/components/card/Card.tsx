interface CardProp{
    info:{
        link:string;
        title:string;
    }
}

function Card(prop:CardProp) {
    const {link,title} = prop.info;
    return(
        <div className="card">
            <img src={link}/>
            <h3>{title}</h3>
        </div>
    );
}

export default Card;