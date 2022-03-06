// import React from "react";
// import logo from "./logo.svg";
// import axios from 'axios';
// import { Console } from 'console';
// import Menu from "@material-ui/core/Menu";
// import Button from "@material-ui/core/Button";
// import ClickAwayListener from "@material-ui/core/ClickAwayListener";
// import Grow from "@material-ui/core/Grow";
// import Paper from "@material-ui/core/Paper";
// import Popper from "@material-ui/core/Popper";
// import MenuItem from "@material-ui/core/MenuItem";
// import MenuList from "@material-ui/core/MenuList";
// import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
// import { useState, useEffect } from 'react';
// import { useAppSelector, useAppDispatch } from '../../../app/hooks';
// import { Link } from "react-router-dom";
// //import {update, getJokeAsync} from '../../../app/reducers/textSlice'; 
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   incrementIfOdd,
//   selectBag,
// } from '../../../app/reducers/bagSlice';


// function Menu1() {

//    const bag = useAppSelector(selectBag);
//   const dispatch = useAppDispatch();


//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setAnchorEl(event.currentTarget);
   
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//      console.log("hi");
//   };
//   return (
//     <div className="navbar">
//       <div className="navbar__box">
//         <div className="navbar__left">
//           <nav role="navigation"></nav>
//           <div className="categories">
//             <Button
//               id="basic-button"
//               aria-controls={open ? "basic-menu" : undefined}
//               aria-haspopup="true"
//               aria-expanded={open ? "true" : undefined}
//               onClick={handleClick}
//             >
//               <img
//                 src="https://cdn.icon-icons.com/icons2/2751/PNG/512/menu_burger_icon_176150.png"
//                 alt="Logo"
//               />
//             </Button>
//             <Menu
//               id="basic-menu"
//               anchorEl={anchorEl}
//               open={open}
//               onClose={handleClose}
//               MenuListProps={{
//                 "aria-labelledby": "basic-button",
//               }}
//             >
//               <MenuItem onClick={handleClose}>Clothes</MenuItem>
//               <MenuItem onClick={handleClose}>Shoes</MenuItem>
//               <MenuItem onClick={handleClose}>Accessories</MenuItem>
//             </Menu>
//           </div>
//           <span>
//             <img
//               src="https://i.pinimg.com/originals/6f/dd/03/6fdd0381fb24566c13af151a9c5a9ddc.jpg"
//               alt="Logo"
//             />
//           </span>
//           {/* <a href="#home">Explore</a> */}
//         </div>
//         <div className="navbar__right">
//           {/* <Link to="/main/signin" className="give-classes">
//             <img src={logIn} alt="Estudar" />
//             log in
//           </Link> */}
//           <button className="navbar__right__signup" type="button">
//             <span>Shopping bag</span>
//           </button>
//           <a href="#home">help</a>
//           <Link to="/SignUp" >
//           <button className="navbar__right__signin" type="button">
//             Sign in
//           </button>
//           </Link>
//              <button className="navbar__right__signin" type="button">
//          {bag}
//          </button>
//         </div>
        
//       </div>
//     </div>
//   );
// }
// export default Menu1;
export{}