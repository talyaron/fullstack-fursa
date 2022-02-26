import React from "react";
import "../components/Nearevents_card.scss";
import tent from "../Images/tent.jpg";
import Rola from "../Images/Rola.jpeg";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
interface CardProp {
  src: any;
  title1: string;
  title2: string;
  title3: string;
  src1: any;
}

function Nearevents_card(prop: CardProp) {
  const { src, src1, title1, title2, title3 } = prop;
  return (
    <div className="grid">
      <div className="grid__item">
        <img src={tent} alt="" />
        <div className="grid2">
          <h1>{title1}</h1>
          <h2>{title2}</h2>
          <h3>{title3}</h3>
          <div className="parent">
            <img className="img2" src={Rola} alt="" />
            <div className="flex justify-between">
              <div className="flex space-x-4">
                <AiOutlineHeart className="btn" />
                <AiOutlineMessage className="btn" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nearevents_card;
