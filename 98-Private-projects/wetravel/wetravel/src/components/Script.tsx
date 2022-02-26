import React from "react";
import "../components/Script.scss";
import vid_1 from "../Images/vid_1.mp4";
import bookimg from "../Images/bookimg.svg";
import pa from "../Images/pa.jpg";
import pb from "../Images/pb.jpg";
import pc from "../Images/pc.jpg";
import pd from "../Images/pd.jpg";
import pe from "../Images/pe.jpg";
import pf from "../Images/pd.jpg";
import Packege from "../components/Packege";
import vid_2 from "../Images/vid_2.mp4";
import vid_3 from "../Images/vid_3.mp4";
import vid_4 from "../Images/vid_4.mp4";
import vid_5 from "../Images/vid_5.mp4";



export interface package_details {
  city: string;
  description: string;
  oldprice: string;
  newprice: string;
  img:string;
}

const packages: Array<package_details> = [
  {
    city: "mumbai",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!",
    oldprice: "$90.00",
    newprice: "$120.00",
    img:"data:image/jpeg;base64,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",
  },
  {
    city: "hawaii",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!",
    oldprice: "$90.00",
    newprice: "$120.00",
    img: "https://www.gohawaii.com/sites/default/files/styles/image_gallery_bg_xl/public/hero-unit-images/12709.jpg?itok=RByMHmpc",
  },
  {
    city: "sydney",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!",
    oldprice: "$90.00",
    newprice: "$120.00",
    img: "data:image/jpeg;base64,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",
  },
  {
    city: "paris",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!",
    oldprice: "$90.00",
    newprice: "$120.00",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKyBwF7Mqr18hyHZ7ZI-m4YAVYqLoHit8j3wWCB8K3ElrZ5Xi5k0KJYeTltJ9e12fHnvg&usqp=CAU",
  },
  {
    city: "tokyo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!",
    oldprice: "$90.00",
    newprice: "$120.00",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5gIzg5jOojjMQ8FjfQgJYsp5hw5BMi-6Pdg&usqp=CAU",
  },
  {
    city: "egypt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!",
    oldprice: "$90.00",
    newprice: "$120.00",
    img:"https://www.airlive.net/wp-content/uploads/2018/01/Think-Egypt-Giza-Sphynx-178375366-pius99-copy.jpg",
  }

];

function script() {

  return (
    <div>
      <header>
        <div id="menu-bar" className="fas fa-bars"></div>

        <a href="#" className="logo">
          <span>T</span>ravel
        </a>

        <nav className="navbar">
          <a href="#home">home</a>
          <a href="#book">book</a>
          <a href="#packages">packages</a>
          <a href="#services">services</a>
          <a href="#gallery">gallery</a>
          <a href="#review">review</a>
          <a href="#contact">contact</a>
        </nav>

        <div className="icons">
          <i className="fas fa-search" id="search-btn"></i>
          <i className="fas fa-user" id="login-btn"></i>
        </div>

        <form action="" className="search-bar-container">
          <input type="search" id="search-bar" placeholder="search here..." />
          {/* <label for="search-bar" className="fas fa-search"></label> */}
        </form>
      </header>
      <div className="login-form-container">
        <i className="fas fa-times" id="form-close">
          {" "}
        </i>
        <form action="">
          <h3>login</h3>
          <input
            type="email"
            className="box"
            placeholder="enter your email"
          ></input>
          <input
            type="password"
            className="box"
            placeholder="enter your password"
          ></input>
          <input type="submit" value="login now" className="btn" />
          <input type="checkbox" id="remember" />
          {/* <label for="remember">remember me</label> */}
          <p>
            forget password? <a href="#">click here</a>
          </p>
          <p>
            don't have and account? <a href="#">register now</a>
          </p>
        </form>
      </div>
      <section className="home" id="home">
        <div className="content">
          <h3>adventure is worthwhile</h3>
          <p>dicover new places with us, adventure awaits</p>
          <a href="#" className="btn">
            discover more
          </a>
        </div>

        <div className="controls">
          <span className="vid-btn active" data-src={vid_2}></span>
          <span className="vid-btn" data-src="images/vid-2.mp4"></span>
          <span className="vid-btn" data-src={vid_3}></span>
          <span className="vid-btn" data-src={vid_4}></span>
          <span className="vid-btn" data-src={vid_5}></span>
        </div>

        <div className="video-container">
          <video width="100%" height="100%" controls loop>
            <source src={vid_1} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
      </section>

      <section className="book" id="book">
        <h1 className="heading">
          <span>b</span>
          <span>o</span>
          <span>o</span>
          <span>k</span>
          <span className="space"></span>
          <span>n</span>
          <span>o</span>
          <span>w</span>
        </h1>

        <div className="row">
          <div className="image">
            <img src="Images/bookimg.svg" alt="" />
          </div>

          <form action="">
            <div className="inputBox">
              <h3>where to</h3>
              <input type="text" placeholder="place name" />
            </div>
            <div className="inputBox">
              <h3>how many</h3>
              <input type="number" placeholder="number of guests" />
            </div>
            <div className="inputBox">
              <h3>arrivals</h3>
              <input type="date" />
            </div>
            <div className="inputBox">
              <h3>leaving</h3>
              <input type="date" />
            </div>
            <input type="submit" className="btn" value="book now" />
          </form>
        </div>
      </section>
      <section className="packages" id="packages">
        <h1 className="heading">
          <span>p</span>
          <span>a</span>
          <span>c</span>
          <span>k</span>
          <span>a</span>
          <span>g</span>
          <span>e</span>
          <span>s</span>
        </h1>

        <div className="box-container">
        {packages.map((a,index) => {
              return (
                <Packege
                  key={index}
                  city={a.city}
                  description={a.description}
                  oldprice={a.oldprice}
                  newprice={a.newprice}
                  img={a.img}
                />
              );
            })}
        </div>
      </section>
    </div>
  );
}

export default script;
