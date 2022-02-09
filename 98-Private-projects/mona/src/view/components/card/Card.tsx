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
  //onst [randomname,setrandomName]=useState('suzan')
  //const names:Array<string>=['mona',"suzan","Tal","suzan2",'mona2','Tal2'];
  const {name,width,height,thick,cardImg}=prop.wood;
  const[text,setText]=useState('')
  const [isLiked,setlike]=useState('like')
  const [color,setcolor]=useState('yellow')

   

 // function handler(eve:any){
   // setrandomName(names[Math.floor(Math.random()*names.length)])
  
  //}

  function handlertxt(eve:any)
  {
    setText(eve.target.value);
 }

  function handlerbtn(eve:any)
  {
    
    if(isLiked=='unlike'){
      setlike('like')
      
    }
    if(isLiked=='like')
    {
      setlike('unlike')
    }
  }
  function handlecolor(ev:any)
  {
    
     setcolor("red")
     
  }

  return (
    <div id='card' className="card" onMouseOver={handlecolor}  >
           

      <img src={cardImg} alt="" />
      <h3>{name}</h3>
      <h1>width is: {width}</h1>
      <h1>height is: {height}</h1>
      <h1>thickness is: {thick}</h1>
      <p>you {isLiked} this type</p>
      <button onClick={handlerbtn} >
        {isLiked}
      </button>
      <p>{text}</p>
      

    </div>
  );
}
  
  export default Card;
  