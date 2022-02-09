
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
    const [inputtext,setText]=useState('text');
    const {name,age,height,img}=prop.info;

    function handleColor(e: any) {
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

    function handlerightclick(ev:any){
        try{
            console.log(ev.type)
        }
        catch(err){
            console.log(err)
        }
    }

    function handletext(ev:any){
        try{
            console.log(ev.target.value);
            var text=ev.target.value;
            setText(text);
        }
        catch(err){
            console.log(err)
        }
        
//        var text;
//         setText(text);


    }

    return(
        <div className="card" style={{backgroundColor:color}}>
            <img src={img} alt="" />
            <h3>{name}</h3>
           
            <p>age is: {age}</p>
            <p>height is: {height}</p>
            <h1 className='names'>{names}</h1>
            <div>{inputtext}</div>
           <br />
            {/* <form onSubmit={changename}> */}
                <button onClick={changename} className='btn' type="submit">change name</button>
            {/* </form> */}
            {/* <form onSubmit={handleSubmit}>
                <button className='btn' type="submit">change color</button>
            </form> */}
            <button onClick={handleColor}>change color</button>
            <input onClick={handletext}></input>
        </div>
    );
}

export default Card;