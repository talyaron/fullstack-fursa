import {useState} from 'react'
import './Card.scss'

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
  const [color,setcolor]=useState('')
  const [image,setImg]=useState('https://cdn2.iconfinder.com/data/icons/unigrid-human-vol-2/57/011_yes_like_agree_vote_thumbs-up_thumbs-512.png')

   

 // function handler(eve:any){
   // setrandomName(names[Math.floor(Math.random()*names.length)])
  
  //}

  function handlertxt(eve:any)
  {
    
    setText(eve.target.value);
 }

  function handlerbtn(eve:any)
  {
    
    if(isLiked==='unlike'){
      setlike('like')
      setImg('https://cdn2.iconfinder.com/data/icons/unigrid-human-vol-2/57/011_yes_like_agree_vote_thumbs-up_thumbs-512.png')
      
    }
    if(isLiked==='like')
    {
      setlike('unlike')
      setImg('https://cdn0.iconfinder.com/data/icons/interface-line-4/48/Dislike_unlike_thumb_down-512.png')
    }
  }
  function handlerMouseOver(ev:any)
  {
    
     setcolor("rgb(196,196,196)")
     
  }
  function handlerMouseOut()
  {
    setcolor('rgb(185, 109, 9)')
  }

  return (
    <div id='card' className="card" onMouseOver={handlerMouseOver} onMouseOut={handlerMouseOut} style={{backgroundColor:color}} 
    >
           

      <img src={cardImg} alt="" />
      <h3>{name}</h3>
      <h1>width is: {width}</h1>
      <h1>height is: {height}</h1>
      <h1>thickness is: {thick}</h1>
      <p>you {isLiked} this type</p>
      <button   onClick={handlerbtn}  >
        <img src={image} alt="" />
        
      </button>
      <p>{text}</p>
      

    </div>
  );
}
  
  export default Card;
  