import {useState} from 'react'
interface CardProp {
  wood:{
  name: string,
  width:number,
  height:number,
  thick:number,
  cardImg:string
  };
}

function Card(prop: CardProp) {
  const [randomname,setrandomName]=useState('suzan')
  const names:Array<string>=['mona',"suzan","Tal","suzan2",'mona2','Tal2'];
  const {name,width,height,thick,cardImg}=prop.wood;
  const[text,setText]=useState('')
  function handler(eve:any){
    setrandomName(names[Math.floor(Math.random()*names.length)])
  
  }
  function handlertxt(eve:any)
  {
    setText(eve.target.value);

  }
  return (
    <div id='card' className="card" >
      
      <img src={cardImg} alt="" />
      <h3>{name}</h3>
      <p>width is: {width}</p>
      <p>height is: {height}</p>
      <p>thickness  is: {thick}</p>
      <p>{randomname}</p>
      <button onClick={handler} >
        {randomname}
      </button>
      <p>{text}</p>
      <input onKeyUp={handlertxt}></input>

    </div>
  );
}
  
  export default Card;
  