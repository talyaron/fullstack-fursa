//import "../components/Nearevents.scss";
import Bottombar from "./Bottombar";
import Header from "./Header";
import Rola from "../Images/Rola.jpeg";
import tent from "../Images/tent.jpg";
import { data } from "../components/Bottombar";
import Nearevents_card from "./Nearevents_card";
import {AiOutlineHeart,AiOutlineMessage} from "react-icons/ai";

interface CardProp {
  src: any;
  title1: string;
  title2: string;
  title3: string;
  src1: any;
}
const event: Array<CardProp>=[{src:{tent},title1:"Bonfire Night",title2:"16",title3:"December 2019",src1:{Rola}},{src:{tent},title1:"Bonfire Night",title2:"16",title3:"December 2019",src1:{Rola}},{src:{tent},title1:"Bonfire Night",title2:"16",title3:"December 2019",src1:{Rola}}];


function Nearevents() {
  const name: data = { name: "events" };
  return (
    <div style={{ backgroundColor: "#F0F0F0" }}>

      <div className="grid">
      <div className="list">
            {event.map((even, index) => {
              return (
                <Nearevents_card
                  key={index}
                  title1={even.title1}
                  src={even.src}
                  title2={even.title2}
                  title3={even.title3}
                  src1={even.src1}
                />
              );
            })}
          </div>

      </div>
      <Bottombar name={name.name} />
    </div>
  );
}

export default Nearevents;