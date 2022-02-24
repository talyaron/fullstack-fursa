import {useEffect} from 'react';
import axios from 'axios';
import logo from '../../../logo.svg';
import './admincourses.scss';
import { useState } from "react";
import JsonData from '../../../../db.json';
// import 'db.json';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonGroup from '@mui/material/ButtonGroup';
import AdminHeader from '../../components/adminHeader/adminHeader';
import AddCourse from '../addCourse/addCourse'

interface courses {
  id: number;
  name:string;
  participants: number;
  cost:number;
}
const Courses: Array<courses> = [
    {
        id: 1,
        name: "group lessons",
        participants: 10,
        cost : 1000
      },
      {
        id: 2,
        name: "private lessons",
        participants: 1,
        cost : 1200
      },
      {
        id: 3,
        name: "single lesson",
        participants: 1,
        cost : 100
      },
  ];

function AdminCourses() {
 
    function JsonDataDisplay(){
      const DisplayData=Courses.map(
          (info)=>{
              return(
                  <tr>
                      <td>{info.id}</td>
                      <td>{info.name}</td>
                      <td>{info.participants}</td>
                      <td>{info.cost}</td>
                  </tr>
              )
          }
          
      )
      }
      

  return (
      
 <div className='admCouDiv'>
<AdminHeader />
{/* <Link to={`/`}>
   <Button className='backbtn' variant="outlined"   onClick={() => {
    alert('clicked');
  }}> back</Button>
  </Link> */}

     <h4>courses</h4>
     <div className='tablediv'>
     <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>participants</th>
                    <th>Cost</th>
                    <th>Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                 
              {Courses.map((info)=>{
              return(
                  <tr>
                      <td>{info.id}</td>
                      <td>{info.name}</td>
                      <td>{info.participants}</td>
                      <td>{info.cost}</td>
                      <td>
                      <ButtonGroup className='grpbtn' variant="contained" aria-label="outlined small button group">
                      {/* <Link to={`/addCourse`}>    <Button className='addbtn'>Add</Button> </Link> */}
      <Button>Edit</Button>
      <Button>Delete</Button>
    </ButtonGroup>
                        </td>
                  </tr>
              )
          }
          
      )}
                    
                </tbody>
            </table>
     </div>
     <Link to={`/addCourse`}>    <Button className='addbtn'>Add new course</Button> </Link>
      
        </div>
  );
}

export default AdminCourses;
