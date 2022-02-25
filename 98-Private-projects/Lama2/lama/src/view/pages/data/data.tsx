import {useEffect} from 'react';
import axios from 'axios';
import logo from '../../../logo.svg';
import './data.scss';
import { useState } from "react";
import JsonData from '../../../../db.json';
// import 'db.json';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonGroup from '@mui/material/ButtonGroup';


interface courseProp {
  courseid: number,
  userid: number,
  username:string,
}
function Data() {
    const [details, setDetails] = useState([]);
     const [courses,setCourses]=useState([{courseid:0, userid:0, username: ""}]);
     axios.get('http://localhost:3004/courses').then(({data})=>console.log(data));
     axios.get('http://localhost:3004/participants').then(({data})=>console.log(data));
 

  useEffect(()=>{
    axios.get('http://localhost:3004/participants').then(({data})=>{
      setDetails(data); 
    })
},[]);


  return (
      
 <div>
<Link to={`/`}>
   <Button className='backbtn' variant="outlined"   onClick={() => {
    alert('clicked');
  }}> back</Button>
  </Link>

     <h4>participants in courses</h4>
     <div className='tablediv'>
     <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Course Id</th>
                    <th>User Id</th>
                    <th>User Name</th>
                    <th>Edit/Add</th>
                    </tr>
                </thead>
                <tbody>
                 
              {details.map((rest, index)=>{
              return(
                  <tr>
                      {/* <td>{rest.courseid}</td>
                      <td>{rest.userid}</td>
                      <td>{rest.username}</td> */}
                      <td>
                      <ButtonGroup className='grpbtn' variant="contained" aria-label="outlined small button group">
      <Button>Add</Button>
      <Button>Edit</Button>
      <Button>Delete</Button>
    </ButtonGroup>
                        {/* <button className='editaddbtn' onClick={handleAxios}>Edit/Add</button> */}
                        </td>
                  </tr>
              )
          }
          
      )}
                    {/* {DisplayData} */}
                    
                </tbody>
            </table>
     </div>

<br></br>


     <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      
        {/* <button onClick={handleAxios}>Activate</button>
        <button onClick={Deletedata}>Delete</button> */}

        <p>the course details : {details}</p> 
        </div>
  );
}

export default Data;
