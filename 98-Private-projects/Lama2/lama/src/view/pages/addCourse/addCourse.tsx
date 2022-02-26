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

    function handleAdd(ev:any){
      ev.prevenntDefault();
      console.dir(ev.target);
      const form=ev.target
        axios.post('http://localhost:3004/courses',{'name':form[0].value, 'participants':form[2].value,'lessons':form[3].value,'cost':form[1].value}).then(({data})=>console.log(data));
            // axios.post('http://localhost:3004/posts',{'title':'bad book'}).then(({data})=>console.log(data));

    }

    return(
        <div className="addCourse">
            <form onSubmit={handleAdd} className="formAddCourse" >
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
                  <Button className='addbtn'  type="submit">Add</Button>
                  {/* </Link> */}

            </form>

</div>
        
    );

}

export default AddCourse;