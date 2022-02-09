
// import './Card.scss';
import{useState} from'react';

interface CardProp{
    info: {
        name:string;
        age:number;
        height:number;
        img:string;

        
    }
}


function Card(prop:CardProp){
    const [color,SetColor]=useState('red');
    const [names,Setname]=useState("Lama");
    const names2=["a","b","c","d","E","f"];
    const {name,age,height,img}=prop.info;

    function handleSubmit(e: any) {
        e.preventDefault();
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        SetColor(color);
    }
    function changename(e: any) {
        e.preventDefault();
         var nameInArr = names2[Math.floor(Math.random()*names2.length)];

        Setname(nameInArr);
    }

    return(
        <div className="card" style={{backgroundColor:color}}>
            <img src="{img}" alt="" />
            <h3>{name}</h3>
            <h1>{names}</h1>
            <p>age is: {age}</p>
            <p>height is: {height}</p>
            <form onSubmit={changename}>
                <button className='btn' type="submit">change name</button>
            </form>
            <form onSubmit={handleSubmit}>
                <button className='btn' type="submit">change color</button>
            </form>
        </div>
    );
}

export default Card;