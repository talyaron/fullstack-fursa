import React from "react";

import Card from "./Card";
import "../views/Cardlist.scss";
import { useParams, Outlet } from "react-router-dom";
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
function Cardlist() {
  return (
    <div className="cardlist">
      {arr.map((card, index) => {
        const { title, src, id } = card;
        return <Card key={index} info={{ title, src, id }} />;
      })}
      <Outlet />
    </div>
  );
}

export default Cardlist;
