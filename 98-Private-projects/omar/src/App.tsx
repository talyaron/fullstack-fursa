import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Events from './view/components/Events'
//components
import Backbutton from './view/components/Back/BackButton'

import Exercise from './view/components/exercise/Exercise';
// import Popup from './view/components/popup/Popup';
import LogoImg, { Aa } from "./view/components/image/Image"
import Profile from './view/components/profile/Profile'


const App = () => {

  return (<>
    <div className="App">
      <div className="App-div">
        <Backbutton />
        <div className = 'AppTitle'> GymFit </div>
        <div className = 'subTitle'> Make the perfect body</div>
        
        <LogoImg />
        {/* <Events /> */}
        <Profile />
      </div>
    </div>
  </>
  );
}

export default App;
