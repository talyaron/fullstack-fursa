import React from "react";
import "../components/Nearevents.scss";
import Bottombar from "./Bottombar";
import Header from "./Header";
import Rola from "../Images/Rola.jpeg";
import tent from "../Images/tent.jpg";
import { data } from "../components/Bottombar";
import { DateRangeTwoTone } from "@mui/icons-material";

function Nearevents() {
  const name: data = { name: "events" };
  return (
    <div style ={{backgroundColor:'#aaaa'}}>
      <Header />
      <div className="grid">
        <div className="grid__item">
          <img src={tent} />
          <div className="grid2">
            <h1>Bonfire Night</h1>
            <h2>16</h2>
            <h3>December 2019</h3>
            <img src={Rola} />
          </div>
        </div>
        <div className="grid__item">
          <img src={tent} />
          <div className="grid2">
            <h1>Bonfire Night</h1>
            <h2>19</h2>
            <h3>December 2019</h3>
            <img src={Rola} />
          </div>
        </div>
        <div className="grid__item">
          <img src={tent} />
          <div className="grid2">
            <h1>Bonfire Night</h1>
            <h2>18</h2>
            <h3>December 2019</h3>
            <img src={Rola} />
          </div>
        </div>
        <div className="grid__item">
          <img src={tent} />
          <div className="grid2">
            <h1>Bonfire Night</h1>
            <h2>17</h2>
            <h3>December 2019</h3>
            <img src={Rola} />
          </div>
        </div>
        <div className="grid__item">
          <img src={tent} />
          <div className="grid2">
            <h1>Bonfire Night</h1>
            <h2>17</h2>
            <h3>December 2019</h3>
            <img src={Rola} />
          </div>
        </div>
        <div className="grid__item">
          <img src={tent} />
          <div className="grid2">
            <h1>Bonfire Night</h1>
            <h2>17</h2>
            <h3>December 2019</h3>
            <img src={Rola} />
          </div>
        </div>
        <div className="grid__item">
          <img src={tent} />
          <div className="grid2">
            <h1>Bonfire Night</h1>
            <h2>17</h2>
            <h3>December 2019</h3>
            <img src={Rola} />
          </div>
        </div>
        <div className="grid__item">
          <img src={tent} />
          <div className="grid2">
            <h1>Bonfire Night</h1>
            <h2>17</h2>
            <h3>December 2019</h3>
            <img src={Rola} />
          </div>
        </div>
        
      </div>
      <Bottombar name={name.name} />
    </div>
  );
}

export default Nearevents;