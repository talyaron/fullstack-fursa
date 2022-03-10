import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import JsonData from '../../../../db.json';

interface cardProp {
    id: number;
    courseid: number,
    userid: number,
    username:string,
}
const partInCourses: Array<cardProp> = [
    {
        id:1,
        courseid: 1,
        userid: 1,
        username:"aaaa"
      },
      {
        id:1,
        courseid: 1,
        userid: 2,
        username:"bbb"
      },
      {
        id:1,
        courseid: 1,
        userid: 3,
        username:"ccc"
      },
      {
        id:1,
        courseid: 1,
        userid: 4,
        username:"ddd"
      },
      {
        id:1,
        courseid: 2,
        userid: 2,
        username:"bbb"
      },
  ];

  


function Admin() {

    function JsonDataDisplay(){
        const DisplayData=JsonData.courses.map(
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
    const [admin, setAdmin] = useState(false);
    const [info, setInfo] = useState({ text: "", phone: "" });
    const style = {
        position: 'absolute',                                                                              
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return (
    
<div>
    <button onClick={JsonDataDisplay}>show details about courses</button>
        {/* {partInCourses.map((val,index)=>{
            const {id,
                courseid,
                userid,
                username}=val;
            return <Card key={index} info={{name,age,height,img}}/>
           })} */}
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Participants</th>
                    <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                 
                    
                    {/* {DisplayData} */}
                    
                </tbody>
            </table>
           </div>
 
    )
}

export default Admin;