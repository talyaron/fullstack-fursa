import React from 'react';

import Card from './Card'
import '../views/Cardlist.scss'
interface Cards {
    title: string;
    src: string;
  }
  const arr: Array<Cards> = [
    {
      title: "Nature",
      src: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
    },
  
    {
      title: "Liverpool",
      src: "https://imageio.forbes.com/specials-images/imageserve/1153850565/Liverpool-Parade-to-Celebrate-Winning-UEFA-Champions-League/960x0.jpg?fit=bounds&format=jpg&width=960",
    },
  ];
function Cardlist() {
  return <div className="cardlist">
      
        {arr.map((card, index) => {
              const { title, src } = card;
              return <Card key={index} info={{ title, src }} />;
            })}
  </div>;
}

export default Cardlist;
