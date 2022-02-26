import { Link } from "react-router-dom";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './addCourse.scss';
import { useState } from 'react';
import axios from 'axios';

function AddCourse(){
  const [name, setName] = useState('');
  const [participants, setParti] = useState();
  const [lessons, setLessons] = useState();
  const [cost, setCost] = useState();
  
    function handleAdd(){
        axios.put('http://localhost:3004/courses/',{'name':'group lessons', 'participants':12,'lessons':10,'cost':1200}).then(({data})=>console.log(data));
            // axios.post('http://localhost:3004/posts',{'title':'bad book'}).then(({data})=>console.log(data));

    }

    return(
        <div className="addCourse">
            <form className="formAddCourse" action="">
            <TextField
            className="txtfield1"
                  autoComplete="given-name"
                  name="Course Type"
                  required
                  fullWidth
                  id="courseType"
                  label="course type"
                  autoFocus
                />
                      <TextField
            className="txtfield1"
                  autoComplete="given-name"
                  name="Cost"
                  required
                  fullWidth
                  id="cost"
                  label="cost"
                  autoFocus
                />
                                  <TextField
            className="txtfield1"
                  autoComplete="given-name"
                  name="participants"
                  required
                  fullWidth
                  id="participants"
                  label="participants"
                  autoFocus
                />                  <TextField
            className="txtfield1"
                  autoComplete="given-name"
                  name="lessons"
                  required
                  fullWidth
                  id="lessons"
                  label="lessons"
                  autoFocus
                />
                 {/* <Link to={`/addCourse`}>    */}
                  <Button onClick={handleAdd} className='addbtn'>Add</Button>
                  {/* </Link> */}

            </form>

</div>
        
    );

}

export default AddCourse;