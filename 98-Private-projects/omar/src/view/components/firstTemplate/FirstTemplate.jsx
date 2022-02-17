import React from 'react'
import { Link } from 'react-router-dom';
import Back from '../../components/Back/BackButton'
import './FirstTemplate.scss'
import LogoImg, { Aa } from "../../components/image/Image"
function FirstTemplate() {
  return (
    <div className="App">
      <div className="App-div">
        
       
        <div className="AppTitle"> GymFit </div>
        <div className="subTitle"> Make the perfect body</div>
        <LogoImg />
      </div>
    </div>
  );
}

export default FirstTemplate
