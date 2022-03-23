import React, { useEffect, useState } from 'react'
import './Accident.scss';

import AccidentComp from '../../Components/AccidentComponents/AccidentComp';
import search from '../../photos/search.png';
import settings from '../../photos/settings.png';
import chatIcon from '../../photos/chat.jpg';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { fetchAccidentsAsync } from '../../../features/accidents/accidentsReducer';
import { useNavigate } from 'react-router-dom';
import MenuAppBar from '../../Components/header/appBar';

function Accident() {
  const accidentsReducer = useAppSelector(state => state.accidents);
  const dispatch = useAppDispatch();
  const nav = useNavigate();

  useEffect(() => {
    dispatch(fetchAccidentsAsync())
  }, [])

  return (
    <div className='AccidentContainer'>
      <MenuAppBar type="home" />
      <div className="accidentsContent">
        {accidentsReducer.status === 'loading' ? <div>جاري التحميل...</div> :
          accidentsReducer.value.accidents.map((accident, index) => {
            return (
              <AccidentComp key={index} accident={accident} />
            );
          })
        }
      </div>
    </div>
  )
}

export default Accident