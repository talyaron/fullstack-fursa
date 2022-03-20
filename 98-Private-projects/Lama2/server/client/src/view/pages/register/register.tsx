
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import * as React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Link } from "react-router-dom";
import './register.scss';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

function Register() {
    const [course, setCourse] = React.useState('');

    const handleChange = (event:any) => {
      setCourse(event.target.value);
    };
    return (
        <div className = 'register'> 
           <Box sx={{ minWidth: 120 }}>
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
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                />

    
  
         
        </div>
        
    );
  }

  export default Register;