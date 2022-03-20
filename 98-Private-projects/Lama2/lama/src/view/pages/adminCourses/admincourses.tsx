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
  lessons:number;
  cost:number;
}

function AdminCourses() {
  const [details, setDetails] = useState<Array<any>>([{id: 0, name:"", participants:0,lessons:0,cost:0}]);

useEffect(() => {
  axios.get('http://localhost:3004/courses').then(({ data }) => setDetails(data));
}, []);

function handleDelete(event:any){
  event.preventDefault();
  const id=event.target.value;
  axios.delete(`http://localhost:3004/courses/${id}`)
  .then(res => {
    console.log(res);
    console.log(res.data);
  })
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
                    <th>lessons</th>
                    <th>Cost</th>
                    <th>Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                 
              {details.map((info,index)=>{
              return(
                  <tr key={index}>
                      <td>{info.id}</td>
                      <td>{info.name}</td>
                      <td>{info.participants}</td>
                      <td>{info.lessons}</td>
                      <td>{info.cost}</td>
                      <td>
                      <ButtonGroup className='grpbtn' variant="contained" aria-label="outlined small button group">
                      {/* <Link to={`/addCourse`}>    <Button className='addbtn'>Add</Button> </Link> */}
      <Button>Edit</Button>
      <Button onClick={handleDelete}>Delete</Button>
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
