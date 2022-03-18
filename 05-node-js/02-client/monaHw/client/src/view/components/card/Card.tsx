import { useState } from 'react'
import './Card.scss'
import { Link, useNavigate } from "react-router-dom";
import BasicRating from '../rating/Rating';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export interface CardProp {
  wood: {
    name: string,
    imageUrl: string,
    pricePerMeter: number
  };
}

function Card(prop: CardProp) {
  //onst [randomname,setrandomName]=useState('suzan')
  //const names:Array<string>=['mona',"suzan","Tal","suzan2",'mona2','Tal2'];
  const { name, imageUrl, pricePerMeter } = prop.wood;
  const [text, setText] = useState('')
  const [isLiked, setlike] = useState('like')
  const [color, setcolor] = useState('')
  const [image, setImg] = useState('https://cdn2.iconfinder.com/data/icons/unigrid-human-vol-2/57/011_yes_like_agree_vote_thumbs-up_thumbs-512.png')
 const navigate=useNavigate()


  // function handler(eve:any){
  // setrandomName(names[Math.floor(Math.random()*names.length)])

  //}

  function handlertxt(eve: any) {

    setText(eve.target.value);
  }

  function handlerbtn(eve: any) {

    if (isLiked === 'unlike') {
      setlike('like')
      setImg('https://cdn2.iconfinder.com/data/icons/unigrid-human-vol-2/57/011_yes_like_agree_vote_thumbs-up_thumbs-512.png')

    }
    if (isLiked === 'like') {
      setlike('unlike')
      setImg('https://cdn0.iconfinder.com/data/icons/interface-line-4/48/Dislike_unlike_thumb_down-512.png')
    }
  }
  function handlerMouseOver(ev: any) {

    setcolor("rgb(185, 109, 9)")

  }
  function handlerMouseOut() {
    setcolor('rgba(73, 48, 24, 1)')
  }
   function orderHandler(){
      navigate(`/order/${name}/${pricePerMeter}`)
   }
  return (
    <div id='card' className="card" onMouseOver={handlerMouseOver} onMouseOut={handlerMouseOut} style={{ backgroundColor: color }}
    >
      <div><img src={imageUrl} alt="" /></div>
      <div><h3>{name}</h3>
      <h4>{pricePerMeter}₪ (per meter) </h4></div>
      {/* <h3>{price} shekels</h3> */}
      {/* <BasicRating></BasicRating> */}
      <Box sx={{ '& button': { m: 1 } }}>
        <div>
          <Button variant="contained" style={{ backgroundColor: 'rgb(47, 143, 90)' }} size="medium" onClick={orderHandler}>
            order
          
          </Button>

        </div>
      </Box>

      {/* <p>you {isLiked} this type</p>
      <button  onClick={handlerbtn}  >
        <img src={image} alt="" />
      </button> */}
      <p>{text}</p>

    </div>
  );
}

export default Card;
