import './Card.scss';
import { useState } from "react";
import React from 'react'

import { Link } from 'react-router-dom';


interface CardProp {
  info: {
    name: string;
    img: string;
  };
}

function Card(prop: CardProp) {
  const { name, img } = prop.info;
  let [text, settext] = useState('');
  function showName(e: any) {
      try {
        if(text=='')
          text=name;
        else
          text='';
        settext(text)
      } catch (error) {
          console.error(error)
      }
  }

  return (
    <div className="card">
      <img onClick={showName} src={img} alt="" />
      
      <Link to={`/${text}`}> 
        <h4 className="name"> {text}</h4>
      </Link>
    </div>

  );
}

export default Card;
