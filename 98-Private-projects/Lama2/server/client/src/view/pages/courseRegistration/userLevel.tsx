
import './courseRegistration.scss'
import React from 'react'
import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import { Link } from 'react-router-dom';
import Register from '../register/register'
import DateTimePicker from 'react-datetime-picker';
import Box from '@mui/material/Box';
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
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
import { useNavigate } from "react-router-dom";




function UserLevel() {
    const [level, setLevel] = React.useState('');
    const navigate=useNavigate();
  const dispatch = useAppDispatch();


  function handleSubmit(){
    navigate('/courseRegistration');
  }

  const handleChange = (event: any) => {
    setLevel(event.target.value);
  };
  return (
    <div className='mydiv'>

      <Link to={`/homepage`}>
        < button className='backbtn'>
          back </button>
      </Link>

      <form onSubmit={handleSubmit} className='inputDiv'>
   
        <Box className='mybox' sx={{ minWidth: 120 }}>
          <FormControl required fullWidth>
 
            <InputLabel id="demo-simple-select-label">Level</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={level}
              label="Course"
              onChange={handleChange}
            >
              <MenuItem value={1}>Beginner</MenuItem>
              <MenuItem value={2}>Intermediate</MenuItem>
              <MenuItem value={3}>Advanced</MenuItem>
            </Select>
          </FormControl>
        </Box>
      
    
           <Button variant="contained" type="submit" className="regBtn">next</Button>
      </form>

    </div>
  )
}

export default UserLevel;
