
import './courseRegistration.scss'
import React from 'react'
import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import DatePicker from "react-datepicker";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "react-datetime-picker/dist/DateTimePicker.css";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
// import { registerLocale } from "react-datepicker";
// import ro from 'date-fns/locale/ro';
import "react-datepicker/dist/react-datepicker.css";
import 'react-time-picker/dist/TimePicker.css';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import axios from 'axios';
import DatePicker from "react-datepicker";
import { addAppointment, selectAppointment } from '../../../features/coursesRegistrations/registrationSlice'
import { registration } from '../../../features/coursesRegistrations/registrationSlice';



interface TimeManagement {
  start: Date;
  end: Date;
  name: string;
  course: string;

}

const coursesRegis: Array<TimeManagement> = [
  {
    start: new Date(2022, 3, 22, 4, 30),
    end: new Date(2022, 3, 22, 5, 30),
    name: "lama",
    course: "Group lessons",

  }
];


function CourseRegistration() {
  const [courseType, setcourseType] = React.useState('');
  const [level, setLevel] = React.useState('');
  const [alertt, setAlert] = useState(false);
  const [course, setCourse] = React.useState('');
  const [dateState, setDateState] = useState(new Date())
  // const [startDate, setStateDate] = useState(new Date())
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [value, onChange] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [registration, setRegistration] = useState({ name: "", start: new Date(), end: new Date(), course: "" });
  const [allReg, setAllReg] = useState(coursesRegis);
  let dt = new Date(2022, 3, 22, 7, 30);
  const maxTime = dt.setDate(dt.getDate() + 5);
  const includeDatesArray = [new Date('02-27-2022'), new Date('02-28-2022')]


  const dispatch = useAppDispatch();

  const filterDays = (date:any) => {
    // Disable Weekends
    if (date.getDay() === 0 || date.getDay() === 6) {

        return false;
    } else {
        return true;
    }
}
  
  const changeDate = (e: any) => {
    setDateState(e)
  }

  function handleRegistration() {
    setAllReg([...allReg, registration]);
    console.log(allReg);

  }

  function handleRegister(ev:any){
    ev.preventDefault();
    const form = ev.target;
   console.log({form})
    axios.post('/registrations/add-new-registration', { course: form[0].value, level: form[2].value, name: form[4].value,age:form[6].value,date:form[8].value})
      .then(data => {
        console.log(data);
        alert("you have successfully registered")
      }).catch(err => {
        console.error(err);
      })
  }

 

  const handleChoseCourse = (event: any) => {
 
    setCourse(event.target.value);
    if(event.target.value==='private lessons'){
      console.log('fat 3l if private lessons')
      setAlert(true);
    }
   
  };

  const handleChoseLevel = (event: any) => {
    setLevel(event.target.value);
  };

  function changeStartDate(date:any){
    // date=>setStartDate(date)
    setStartDate(date);
    console.log(date.getHours.getMinutes)
    setEndDate(date);
  }


  const validate =  (event: any) => {

      event.preventDefault();
      setAlert(true);
      return;
    
      // setAlert(false);
 };
  return (
    <div className='mydiv'>

      <Link to={`/homepage`}>
        < button className='backbtn'>
          back </button>
      </Link>
      {/* //registration inputs */}
      <form onSubmit={handleRegister} className='inputDiv'>
   
        <Box className='mybox' sx={{ minWidth: 120 }}>
          <FormControl required fullWidth>
 
            <InputLabel id="demo-simple-select-label">Course</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={course}
              label="Course"
              onChange={handleChoseCourse}
            >
              <MenuItem value={10}>Group lessons</MenuItem>
              <MenuItem value={20}>Private lessons</MenuItem>
              <MenuItem value={30}>single lesson</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box className='mybox1' sx={{ minWidth: 120 }}>
          <FormControl required fullWidth>
 
            <InputLabel id="demo-simple-select-label">Level</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select1"
              value={level}
              label="Level"
              onChange={handleChoseLevel}
            >
              <MenuItem value={1}>Beginner</MenuItem>
              <MenuItem value={2}>Intermediate</MenuItem>
              <MenuItem value={3}>Advanced</MenuItem>
            </Select>
          </FormControl>
        </Box>
      
        <TextField
          className="txtfield"
          autoComplete="given-name"
          name="Name"
          required
          id="Name"
          label="Name"
          autoFocus
        />
           <TextField
          className="agefield"
          autoComplete="given-age"
          name="Age"
          required
          id="Age"
          label="Age"
          autoFocus
        />
          {/* <DateTimePicker className='DateTimePicker' onChange={onChange} value={value}
      //  includeDates={includeDatesArray} 
      /> */}
           {/* <input type="datetime-local" id="meeting-time"
        name="meeting-time"
        // filterDate={filterDays}
        > */}

<DatePicker
id="meeting-time"
 isClearable
 placeholderText="Select Start Date"
 showTimeSelect
 dateFormat="MMMM d, yyyy h:mmaa"
 selected={startDate}
 selectsStart
 startDate={startDate}
 endDate={endDate}
//  includeDates={includeDatesArray}
 filterDate={filterDays}
 onChange={changeStartDate}
  
/> 
  

        {/* // min="2022-06-07T00:00" max="2022-06-14T00:00"> */}


        {/* </input>  */}
   

           {/* <Register /> */}
           <Button variant="contained" type="submit" className="regBtn">register</Button>
      </form>

       {/* <button onClick={validate}>Save</button> */}

      {alertt &&
           <div className="popup">
             <span role="img" aria-label="allowed">✅</span> Alphanumeric Characters
             <br />
             <span role="img" aria-label="not allowed">⛔️</span> *
             <form>
             <Box className='mybox' sx={{ minWidth: 120 }}>
          <FormControl required fullWidth>
 
            <InputLabel id="demo-simple-select-label">Course</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={course}
              label="Course"
              onChange={handleChoseCourse}
            >
              <MenuItem value={10}>Group lessons</MenuItem>
              <MenuItem value={20}>Private lessons</MenuItem>
              <MenuItem value={30}>single lesson</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box className='mybox1' sx={{ minWidth: 120 }}>
          <FormControl required fullWidth>
 
            <InputLabel id="demo-simple-select-label">Level</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select1"
              value={level}
              label="Level"
              onChange={handleChoseLevel}
            >
              <MenuItem value={1}>Beginner</MenuItem>
              <MenuItem value={2}>Intermediate</MenuItem>
              <MenuItem value={3}>Advanced</MenuItem>
            </Select>
          </FormControl>
        </Box>

             </form>



           </div>
         }
   


      {/* <DatePicker
 showTimeSelect
 dateFormat="MMMM d, yyyy h:mmaa"
 selected={startDate}
 selectsEnd
 startDate={startDate}
 endDate={endDate}
 minDate={startDate}
 onChange={onChange}
 /> */}
      {/* //  onChange={date => setEndDate(date)} */}


      {/* <Calendar className='caldiv'
        value={dateState}
        onChange={changeDate}
      />
      <p className='aaa'>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p> */}


  
    </div>
  )
}

export default CourseRegistration;
