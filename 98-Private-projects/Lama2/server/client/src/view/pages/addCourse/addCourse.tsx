import { Link } from "react-router-dom";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './addCourse.scss';
import { useState, useEffect  } from 'react';
import axios from 'axios';

function AddCourse(){
  const [courses, setCourses] = useState([])

  useEffect(()=>{

    //fetch courses
  fetch('/get-all-courses')
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setCourses(data.courses);
    }).catch(err=>{
      console.error(err);
    })
  },[])

  function addCourse(ev: any) {
    ev.preventDefault();
    const form = ev.target;
    const obj: any = { name: form[0].value, cost: form[1].value, participants: form[2].value,lessons:form[3].value,hours:form[4].value }
    axios.post('/courses/add-new-course', { name: form[0].value, cost: form[1].value, participants: form[2].value,lessons:form[3].value,hours:form[4].value})
      .then(data => {
        console.log(data);
      }).catch(err => {
        console.error(err);
      })
  }


    function handleAdd(ev:any){
      ev.prevenntDefault();
      console.dir(ev.target);
      const form=ev.target
      console.log(form[0]);
        axios.post('http://localhost:3004/courses',{'name':form[0].value, 'participants':form[2].value,'lessons':form[3].value,'cost':form[1].value}).
        then(({data})=>console.log(data));
alert("course added successfully");
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


            <form onSubmit={addCourse}>
          <input type="text" placeholder='insert course name' name='courseName' />
          <input type="number" name="cost" placeholder='insert course"s cost' />
          <input type="number" name="participants" placeholder='insert participants number' />
          <input type="number" name="lessons" placeholder=' how many lessons' />
          <input type="number" name="hours" placeholder='how much hours' />
          <button type='submit'>Add</button>
        </form>
        <h1>courses</h1>
        {courses.map((course: any) => {
          return <p key={course._id}>{course.name}</p>
        })}

</div>
        
    );

}

export default AddCourse;