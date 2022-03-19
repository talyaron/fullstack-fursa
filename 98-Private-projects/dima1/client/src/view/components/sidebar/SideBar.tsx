import React, { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './SideBar.scss';
import food from '../../images/food.png';
import drink from '../../images/drink.png';
import dessert from '../../images/dessert.png';
import healthy from '../../images/healthy.png';
import salad from '../../images/salad.png';
import soup from '../../images/soup.png';
import pastry from '../../images/pastry.jpg';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { recipesByType, recipesByTypeAsync } from '../../../app/reducers/recipesReducer';

export default function SideBar() {

  const dispatch = useAppDispatch();

  function handleSelectType(type:string){
    dispatch(recipesByTypeAsync(type));
  }

  return (
    <Menu>
      <div className="menu-item" onClick={() => handleSelectType('Food')}>
        <img src={food} alt="" />
        {' '}Food
      </div>
      <div className="menu-item" onClick={() => handleSelectType('Drinks')}>
        <img src={drink} alt="" />
        {' '}Drinks
      </div>
      <div className="menu-item" onClick={() => handleSelectType('Desserts')}>
        <img src={dessert} alt="" />
        {' '}Desserts
      </div>
      <div className="menu-item" onClick={() => handleSelectType('Healthy')}>
        <img src={healthy} alt="" />
        {' '}Healthy
      </div>
      <div className="menu-item" onClick={() => handleSelectType('Salads')}>
        <img className='img1' src={salad} alt="" />
        {' '}Salads
      </div>
      <div className="menu-item" onClick={() => handleSelectType('Soups')}>
        <img src={soup} alt="" />
        {' '}Soups
      </div>
      <div className="menu-item" onClick={() => handleSelectType('Pastries')}>
        <img src={pastry} alt="" />
        {' '}Pastries
      </div>
    </Menu>
  );
}