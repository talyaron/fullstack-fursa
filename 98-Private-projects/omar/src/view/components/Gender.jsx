import React from 'react'
import Header from './Header';
import './Gender.css'
import Btn from './Btn'
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import TransgenderIcon from '@mui/icons-material/Transgender';
import { Link } from 'react-router-dom';

function Gender() {
  return (
    <div>
      <Header />
      <div className='Middle'>
      <p className="underTilte">What's your gender ? </p>
      <button className="Male">
        <MaleIcon className="Icon"/>
        <b>Male</b>
      </button>
      <button className="FeMale">
        <FemaleIcon className="Icon"/>
        <b>Female</b>
      </button>
      <button className="Other">
        <TransgenderIcon className="Icon"/>
        <b>other</b>
      </button>
      <Link className="linkStyle" to="/Goal">
          <Btn title={'next'}/>
        </Link>
        </div>
    </div>
  );
}

export default Gender
