import React from "react";
import "../components/Script.scss";
import myvideo from "/video/myvideo.mp4";

// let searchBtn = document.querySelector("#search-btn");
// let searchBar = document.querySelector(".search-bar-container");
// let formBtn = document.querySelector("#login-btn");
// let loginForm = document.querySelector(".login-form-container");
// let formClose = document.querySelector("#form-close");
// let menu = document.querySelector("#menu-bar");
// let navbar = document.querySelector(".navbar");
// let videoBtn = document.querySelectorAll(".vid-btn");

function script() {


//   window.onscroll = () => {
//     searchBtn.classList.remove("fa-times");
//     searchBar.classList.remove("active");
//     menu.classList.remove("fa-times");
//     navbar.classList.remove("active");
//     loginForm.classList.remove("active");
//   };

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
          <span className="vid-btn active" data-src={myvideo}></span>
          <span className="vid-btn" data-src={myvideo}></span>
          <span className="vid-btn" data-src={myvideo}></span>
          <span className="vid-btn" data-src={myvideo}></span>
          <span className="vid-btn" data-src={myvideo}></span>
        </div>

        <div className="video-container">
          <video width="100%" height="100%" controls loop>
            <source src={myvideo} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
      </section>
    </div>
  );
}

export default script;
