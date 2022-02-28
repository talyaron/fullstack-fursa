import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './SideBar.scss';
import food from '../../images/food.png';
import drink from '../../images/drink.png';
import dessert from '../../images/dessert.png';
import healthy from '../../images/healthy.png';
import salad from '../../images/salad.png';
import soup from '../../images/soup.png';
import pastry from '../../images/pastry.jpg';

export default function SideBar(){
  return (
    <Menu>
      <div className="menu-item" >
        <img src={food} alt="" />
        {' '}Food
      </div>
      <div className="menu-item" >
        <img src={drink} alt="" />
        {' '}Drinks
      </div>
      <div className="menu-item" >
        <img src={dessert} alt="" />
        {' '}Desserts
      </div>
      <div className="menu-item" >
        <img src={healthy} alt="" />
        {' '}Healthy
      </div>
      <div className="menu-item" >
        <img  className='img1' src={salad} alt="" />
        {' '}Salads
      </div>
      <div className="menu-item" >
        <img src={soup} alt="" />
        {' '}Soups
      </div>
      <div className="menu-item" >
        <img src={pastry} alt="" />
        {' '}Pastries
      </div>
    </Menu>
  );
}