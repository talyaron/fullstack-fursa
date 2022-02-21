import React from "react";
import "../components/Nearevents.scss";
interface CardProp {
  id: string;
  src: string;
  title1: string;
  title2: string;
  title3: string;
  src1: string;
  src2: string;
}
function Nearevent_card(prop: CardProp) {
  const { id, src, src1, src2, title1, title2, title3 } = prop;
  return (
    <div className="grid__item">
      <img src={src} alt="" />
      <div className="grid2">
        <h1>{title1}</h1>
        <h2>{title2}</h2>
        <h3>{title3}</h3>
        <div className="parent">
          <img className="img2" src={src1} alt="" />
          <img className="img1" src={src2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Nearevent_card;
