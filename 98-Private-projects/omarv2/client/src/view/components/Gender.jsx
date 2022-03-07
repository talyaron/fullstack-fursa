import React from 'react'
import Header from './Header';
import './Gender.css'
import Btn from './Btn'
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import TransgenderIcon from '@mui/icons-material/Transgender';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import  { setGender } from "../../slice"
import BackButton from './BackButton';



function Gender() {
  const dispatch = useDispatch();
  // const refValues = useRef({ gender: ""});
  return (
    <div>
            <Link to='/newaccount'><BackButton/></Link>
      <Header />
      <div className='Middle'>
      <p className="underTilte">What's your gender ? </p>
      <button className="Male" onClick={() => dispatch(setGender('male'))}>
        <MaleIcon className="Icon"/>
        <b>Male</b>
      </button>
      <button className="FeMale" onClick={() => dispatch(setGender('female'))}>
        <FemaleIcon className="Icon"/>
        <b>Female</b>
      </button>
      <button className="Other" onClick={() => dispatch(setGender('other'))}>
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
