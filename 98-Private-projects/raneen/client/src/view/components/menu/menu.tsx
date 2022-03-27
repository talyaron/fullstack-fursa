import React from "react";
import logo from "./logo.svg";
import axios from "axios";
import { Console } from "console";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { Link } from "react-router-dom";
import {update} from '../../../app/reducers/categorySlice';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectBag,
} from "../../../app/reducers/bagSlice";

function Mainbar() {
  const coatsId = "COATS";
  const jacketsId = "JACKETS";
  const pantsId = "PANTS";


    // const [category, setCategory] = useState("");

  
  const bag = useAppSelector(selectBag);
  const dispatch = useAppDispatch();


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (category:any) => {
    setAnchorEl(null);
    dispatch(update(category));
    console.log(category);

  };
  return (
    <div className="navbar">
      <div className="navbar__box">

        <div className="navbar__left">
          {/* <nav role="navigation"></nav> */}
          <div className="categories">

            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <img
                src="https://static.thenounproject.com/png/478829-200.png"
                alt="Logo"
              />
            </Button>
            <Menu
              className="menuItem"
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {/* <Route path="/:coatsId" children={<Store />} /> */}

              {/* <Link to={`/Store/${coatsId}`}> */}
              <Link to={`/Store`}>
                <MenuItem className="menuItem" onClick={()=>handleClose(coatsId)}>
                  <p>COATS</p>
                </MenuItem>
              </Link>
              {/* <Link to={`/Store/${jacketsId}`}> */}
                <MenuItem className="menuItem" onClick={()=>handleClose(jacketsId)} > 
                  <p>JACKETS</p>
                </MenuItem>
              {/* </Link> */}
              {/* <Link to={`/Store/${pantsId}`}> */}
                <MenuItem className="menuItem" onClick={()=>handleClose(pantsId)}>
                  <p>PANTS</p>
                </MenuItem>
              {/* </Link> */}
            </Menu>
          </div>
          <span>
                    <Link to={`/homePage`}>
              <img
        
             height="70vh"
             width="70vh"
              
                src="https://download.logo.wine/logo/Zara_(retailer)/Zara_(retailer)-Logo.wine.png"
                alt="Logo"
              />
            </Link>
            {/* <Link to={`/homePage`}>
              <img
               height="100vh"
              
                src="https://download.logo.wine/logo/Zara_(retailer)/Zara_(retailer)-Logo.wine.png"
                alt="Logo"
              />
            </Link> */}
          </span>
          {/* <a href="#home">Explore</a> */}
        </div>
        

        <a href="https://www.instagram.com/zara/">
          <img
            src="https://www.pngitem.com/pimgs/m/49-497596_download-instagram-icon-black-circle-clipart-computer-shopping.png"
            alt="Estudar"
          />
        </a>

        <a href="https://www.facebook.com/Zara/">
          <img src="https://www.kindpng.com/picc/m/133-1339537_facebook-full-free-facebook-icon-png-transparent-png.png" />
        </a>

        <a href="hhttps://www.tiktok.com/@zara">
          <img src="https://toppng.com/public/uploads/preview/tik-tok-icon-circle-11609379404aavrbp7kqt.png" />
        </a>

        <div className="navbar__right">
          {/* <Link to="/main/signin" className="give-classes">
            <img src={logIn} alt="Estudar" />
            log in
          </Link> */}
          <button className="navbar__right__signup" type="button">
            <span>Shopping bag</span>
          </button>
          <Link to="/Help">
            <a>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlILy_KpcLwoxuFx7gMJVkrIZRI06AtQ3MMQ&usqp=CAU"
                alt="Estudar"
              />
            </a>
          </Link>

          <Link to="/Help">
            <a>
              <img
                src="https://cdn5.vectorstock.com/i/1000x1000/45/84/help-icon-vector-22894584.jpg"
                alt="Estudar"
              />
            </a>
          </Link>
          <Link to="/SignIn">
            <a>
              <img
                src="https://www.pngitem.com/pimgs/m/111-1114675_user-login-person-man-enter-person-login-icon.png"
                alt="Estudar"
              />
            </a>
          </Link>
          {/* 
          <button className="navbar__right__signin" type="button">
            Sign in
          </button> */}

          {/* <button className="navbar__right__signin" type="button">
           
            <Link to="/SignUp">
           
              Sign in
              // </Link>
          </button> */}

          <Link to="/Favourites">
            <a>
              <img
                src="http://cdn.onlinewebfonts.com/svg/img_550735.png"
                alt="Estudar"
              />
            </a>
          </Link>

          {/* <button className="navbar__right__signin" type="button">
            {bag}
          </button> */}
        </div>
      </div>
    </div>
  );
}
export default Mainbar;
// export {};
