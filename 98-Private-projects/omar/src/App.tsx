import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Events from './view/components/Events'
//components
import Backbutton from './view/components/Back/BackButton'
import FirstTemplate from './view/components/firstTemplate/FirstTemplate'
import Exercise from './view/components/exercise/Exercise';
// import Popup from './view/components/popup/Popup';
import LogoImg, { Aa } from "./view/components/image/Image"
import Profile from './view/components/profile/Profile'


const App = () => {

  return (
    <div>
      <FirstTemplate />
      <Profile />
    </div>
  );
}
export default App

// export default App;
// import React from 'react'
// import { render } from "react-dom";
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
// import App from "./App";
// import Login from './view/pages/login/LoginPage'
// import Gmail from "./view/pages/SignUpGmail/Gmail"
// import Facebook1 from "./view/pages/SignUpGmail/Gmail"
// import Gender from './view/pages/gender/Gender'
// import Goal from './view/pages/goal/Goal'
// import Activity from './view/pages/activity/Activity'
// import Name from './view/pages/name/Name'
// import Height from './view/pages/height/Height'
// import Age from './view/pages/age/Age'
// import Weight from './view/pages/weight/Weight'
// const rootElement = document.getElementById("root");
// render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/Weight" element={<Weight />}> </Route>
//       <Route path="/Height" element={<Height />}> </Route>
//       <Route path="/Age" element={<Age />}> </Route>
//       <Route path="/Name" element={<Name />}> </Route>
//       <Route path="/Activity" element={<Activity />}> </Route>
//       <Route path="/Goal" element={<Goal />}> </Route>
//       <Route path="/Gender" element={<Gender />}> </Route>
//       <Route path="/Login" element={<Login />}> </Route>
//       <Route path="/Facebook" element={<Facebook1 />} />
//       <Route path="/Gmail" element={<Gmail />}>
      
//       </Route>
//     </Routes>
//   </BrowserRouter>,
//   rootElement
// );