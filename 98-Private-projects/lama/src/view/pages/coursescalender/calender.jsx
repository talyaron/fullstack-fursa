
import './calender.scss'
import React, {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import {Link} from 'react-router-dom';


function Calender(){
  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }
  return (
    <>
<Link to={`/`}>
    < button className='backbtn'>
   back </button>
 </Link>

      <Calendar className='caldiv'
      value={dateState}
      onChange={changeDate}
      />
    <p className='aaa'>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
    </>
  )
}

  export default Calender;
  