import { useEffect } from 'react';
import axios from 'axios';
import logo from '../../../logo.svg';
import './data.scss';
import { useState } from "react";
import JsonData from '../../../../db.json';
// import 'db.json';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonGroup from '@mui/material/ButtonGroup';
import AdminHeader from '../../components/adminHeader/adminHeader';


interface courseProp {
  courseid: number,
  userid: number,
  username: string,
}
function Data() {
  const [details, setDetails] = useState<Array<any>>([{ courseid: 0, coursaname: "", userid: 0, username: "" }]);
  const [courses, setCourses] = useState([{ courseid: 0, userid: 0, username: "" }]);
  //  axios.get('http://localhost:3004/courses').then(({data})=>console.log(data));
  // axios.get('http://localhost:3004/participants').then(({ data }) => setDetails(data));

  function handleData() {
    axios.get('http://localhost:3004/participants').then(({ data }) => setDetails(data));
  }

  function handleDelete(ev: any) {
    // ev.prevenntDefault();
    // console.dir(ev.target);

    // axios.delete('http://localhost:3004/participants/').then(({data})=>console.log(data));

  }
  useEffect(() => {
    axios.get('http://localhost:3004/participants').then(({ data }) => setDetails(data));
  }, []);

  return (

    <div className='dataDiv'>
      <AdminHeader />
      <Link to={`/`}>
        {/* <Button className='backbtn' variant="outlined" onClick={() => {
          alert('clicked');
        }}> back</Button> */}
      </Link>
      <h4>participants in courses management</h4>
      <div className='tablediv'>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Course Id</th>
              <th>Course Name</th>
              <th>User Id</th>
              <th>Participant Name</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>

            {details.map((info, index) => {
              return (
                <tr key={index}>
                  <td>{info.courseid}</td>
                  <td>{info.coursename}</td>
                  <td>{info.userid}</td>
                  <td>{info.username}</td>
                  <td>
                    <ButtonGroup className='grpbtn' variant="contained" aria-label="outlined small button group">
                      {/* <Link to={`/addCourse`}>    <Button className='addbtn'>Add</Button> </Link> */}
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
      {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button> */}
      {/* <Button onClick={handleData}> btn</Button> */}
      {/* {details.map((rest,index)=>{
  console.log(rest)
  return(
    <div> {rest.courseid} </div>

  )
}
)} */}

    </div>

  );
}

export default Data;
