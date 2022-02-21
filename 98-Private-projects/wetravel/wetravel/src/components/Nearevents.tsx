import React from "react";
import "../components/Nearevents.scss";
import Bottombar from "./Bottombar";
import Header from "./Header";
import Rola from "../Images/Rola.jpeg";
import tent from "../Images/tent.jpg";
import color from "../Images/color.jpg";
import camp from "../Images/camp.jpg";

function Nearevents() {
  return (
    <div className="grido">
      <Header/>
      <div className="grid">
        <div className="grid__item">
          <img src={color} />
          <div className="grid2">
            <h1>Color party</h1>
            <h2>16</h2>
            <h3>December 2019</h3>
            <div className="parent">
              
            <img  className="img2" src="data:image/jpeg;base64,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"/>
            <img className="img1" src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Nizar_Rawi_Personal_Photo.jpg" />
            </div>
          </div>
        </div>
        <div className="grid__item">
        <img src={camp} />
          <div className="grid2">
            <h1>Camp Night</h1>
            <h2>19</h2>
            <h3>December 2019</h3>
            <img src={Rola}/>
          </div>
        </div>
        <div className="grid__item">
        <img src={tent} />
          <div className="grid2">
            <h1>Bonfire Night</h1>
            <h2>18</h2>
            <h3>December 2019</h3>
            <img src={Rola}/>
          </div>
        </div>
        <div className="grid__item1">
          <div className="circle">
          </div>
          <h3>Add Event</h3>  
        </div>
      </div>
      <Bottombar />
    </div>
  );
}

export default Nearevents;
