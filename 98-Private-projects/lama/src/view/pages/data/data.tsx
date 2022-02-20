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
  id: number;
  courseid: number,
  userid: number,
  username:string,
}
const partInCourses: Array<courseProp> = [
    {
        id:1,
        courseid: 1,
        userid: 1,
        username:"aaaa"
      },
      {
        id:2,
        courseid: 1,
        userid: 2,
        username:"bbb"
      },
      {
        id:3,
        courseid: 1,
        userid: 3,
        username:"ccc"
      },
      {
        id:4,
        courseid: 1,
        userid: 4,
        username:"ddd"
      },
      {
        id:5,
        courseid: 2,
        userid: 2,
        username:"bbb"
      },
  ];

function Data() {
    // const [details, setdetails] = useState<Array<{ value: string }>>([]);
    const [details, setdetails] = useState([{ id: 0, name: "", participants:0, cost: 0}]);

    function JsonDataDisplay(){
      const DisplayData=partInCourses.map(
          (info)=>{
              return(
                  <tr>
                      <td>{info.id}</td>
                      <td>{info.courseid}</td>
                      <td>{info.userid}</td>
                      <td>{info.username}</td>
                  </tr>
              )
          }
          
      )
      }
      
  function handleAxios(){
    // axios.get('http://localhost:3004/courses').then(({data})=>setdetails(data));
//    console.log(data);
    axios.get('http://localhost:3004/courses/1').then(({data})=>setdetails(data));


    // axios.post('http://localhost:3004/posts',{'title':'bad book'}).then(({data})=>console.log(data));

    //axios.put('http://localhost:3004/posts/2',{'title':'best book', author:'best author'}).then(({data})=>console.log(data));
    // axios.patch('http://localhost:3004/posts/2',{ author:'best ever author'}).then(({data})=>console.log(data));
    // axios.patch('http://localhost:3004/posts/2', {readers:['Jame',"bob", 'alis']}).then(({data})=>console.log(data))

    // axios.delete('http://localhost:3004/posts/3').then(({data})=>console.log(data));
  }

  function Deletedata(){
    axios.get('http://localhost:3004/courses').then(({data})=>console.log(data));


  }


  const numbers = ['course1','course2','course3'];
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );

  return (
      
 <div>
<Link to={`/`}>
   <Button className='backbtn' variant="outlined"   onClick={() => {
    alert('clicked');
  }}> back</Button>
  </Link>

     <h4>participants in courses</h4>
     {/* <p>{listItems}</p> */}
{/* <div>
  <p>aaaaaaaa</p> */}
     {/* <p>{details}</p> */}
     {/* {details.map((data, key) => {
          return (
            <div key={key}>
              {data.id +
                " , " +
                data.name +
                " ," +
                data.participants +
                ", " +
                data.cost}
            </div>
          );
        })}
     </div> */}
     <div className='tablediv'>
     <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Course Id</th>
                    <th>User Id</th>
                    <th>User Name</th>
                    <th>Edit/Add</th>
                    </tr>
                </thead>
                <tbody>
                 
              {partInCourses.map((info)=>{
              return(
                  <tr>
                      <td>{info.id}</td>
                      <td>{info.courseid}</td>
                      <td>{info.userid}</td>
                      <td>{info.username}</td>
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

<br></br><br></br>


     <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      
        {/* <button onClick={handleAxios}>Activate</button>
        <button onClick={Deletedata}>Delete</button> */}

        {/* <p>the course details : {details}</p>  */}
        </div>
  );
}

export default Data;
