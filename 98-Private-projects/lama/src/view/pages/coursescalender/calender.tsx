
import './calender.scss'
import React from 'react'
import {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import {Link} from 'react-router-dom';
import Register from '../register/register'
import DateTimePicker from 'react-datetime-picker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "react-datetime-picker/dist/DateTimePicker.css";
// import { registerLocale } from "react-datepicker";
// import ro from 'date-fns/locale/ro';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


interface TimeManagement{
  start:Date;
  end:Date;
  name:string;
  course:string;

}

const coursesRegis:Array<TimeManagement>=[
  {
    start:new Date(2022,3,22,4,30),
    end:new Date(2022,3,22,5,30),
    name:"lama",
    course:"Group lessons",
  
}
];



function Calender(){
  const [course, setCourse] = React.useState('');
  const [dateState, setDateState] = useState(new Date())
  const [startDate, setStateDate] = useState(new Date())
  const [date, setDate] = useState(new Date());
  const [value, onChange] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [registration, setRegistration] = useState({name:"",start:new Date(),end:new Date(),course:""});
  const [allReg, setAllReg] = useState(coursesRegis);
  let dt = new Date(2022,3,22,7,30);
  const maxTime = dt.setDate(dt.getDate() + 5);
  const includeDatesArray = [new Date('02-25-2022'), new Date('02-26-2022')]

  const changeDate = (e:any) => {
    setDateState(e)
  }

  function handleRegistration(){
    setAllReg([...allReg,registration]);
    console.log(allReg);

  }

  const handleChange = (event:any) => {
    setCourse(event.target.value);
  };
  return (
    <div className='mydiv'>
<Link to={`/`}>
    < button className='backbtn'>
   back </button>
 </Link>
 {/* //registration inputs */}
 <Box className='mybox' sx={{ minWidth: 120 }}>
      <FormControl required fullWidth>
        <InputLabel id="demo-simple-select-label">Course</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={course}
          label="Course"
          onChange={handleChange}
        >
          <MenuItem value={10}>Group lessons</MenuItem>
          <MenuItem value={20}>Private lessons</MenuItem>
          <MenuItem value={30}>single lesson</MenuItem>
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
 {/* <Register /> */}
 <DateTimePicker   
//  includeDates={includeDatesArray} 
 onChange={onChange} value={value}/>

{/* <DatePicker
 showTimeSelect
 dateFormat="MMMM d, yyyy h:mmaa"
 selected={startDate}
 selectsEnd
 startDate={startDate}
 endDate={endDate}
 minDate={startDate}
 onChange={date => setEndDate(date)}
/> */}

      <Calendar className='caldiv'
      value={dateState}
      onChange={changeDate}
      />
    <p className='aaa'>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>


    <Button variant="contained" className="regBtn">register</Button>
    </div>
  )
}

  export default Calender;
  