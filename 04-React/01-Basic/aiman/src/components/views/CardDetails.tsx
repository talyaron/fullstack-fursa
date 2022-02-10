import React from 'react';
import {useParams} from 'react-router-dom';
import Card from './Card'
interface Cards {
    title: string;
    src: string;
    id: string;
  }
  const arr: Array<Cards> = [
    {
      id: "1",
      title: "Nature",
      src: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
    },
  
    {
      id: "2",
      title: "Liverpool",
      src: "https://imageio.forbes.com/specials-images/imageserve/1153850565/Liverpool-Parade-to-Celebrate-Winning-UEFA-Champions-League/960x0.jpg?fit=bounds&format=jpg&width=960",
    },
  ];

function CardDetails() {
    const {cardid} = useParams();
    console.log(cardid);
    function findCard(id:string| undefined, arr:Array<Cards|any>):Cards|undefined {
        const card:Cards  = arr.find(c => c.id === id);
        if(card) {
            return card;
        }else {
            return undefined;
        }
    }
    const card  = findCard(cardid , arr);
    let title:string , src:string ,id:string ;
    if(card) {
     title = card.title;
     src = card.src;
     id = card.id;
    }else{
        title = "";
        src = "";
        id = "";
    }
  return <div className="card_details">
    {card && <Card info = {{title , src , id}}/> }
  </div>;
}

export default CardDetails;
