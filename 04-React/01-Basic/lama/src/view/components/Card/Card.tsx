interface CardProp{
    info: {
        name:string;
        age:number;
        height:number;
        img:string;

        
    }
}


function Card(prop:CardProp){
    const {name,age,height,img}=prop.info;
    return(
        <div className="card">
            <img src="{img}" alt="" />
            <h3>{name}</h3>
            <p>age is: {age}</p>
            <p>height is: {height}</p>
        </div>
    );
}

export default Card;