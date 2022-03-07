
// import  './course.scss';
import './courses.scss';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Card from '../../components/trainersCard/card';
import{useState} from'react';
import {Link} from 'react-router-dom';
// import Nav from '../../components/nav/Nav';
import Nav from '../../components/nav/Nav';
import Header from '../../components/header/header';
import {Outlet} from 'react-router-dom'
import {coursesProps} from './course';
//components
import Course from "./course";


const courses = [{id:1,name:'group lessons',hours:5,lessons:10 ,participants:10,cost:1000},
 {id:2,name:'private lessons',hours:5,lessons:10,participants:1,cost:1200},
{id:3,name:'single lesson',hours:0.5,lessons:1 ,participants:1,cost:110}];
const cardcourses = [{id:1,hours:5,participants:10,cost:1000}, 
    {id:2,hours:5,participants:1,cost:1200},
    {id:3,hours:5,participants:1,cost:100}];

function Courses() {



    return (

        <div className="maindiv">
     {/* <Header /> */}
            <h3>Courses and private lessons</h3>
            {/* <div className='calbtn'> */}
 {/* <Link to={`/calender`}>
    < button className='calbtn'>
   Register </button>
 </Link> */}
     {/* </div> */}
     {/* <Link to={`/calender`}>Register 
 </Link> */}
      {/* <div className="course"></div> */}
   
            <div className="courses">
    {courses.map((course:coursesProps, i)=>{
          return <Course key={i} name={course.name} id={course.id} hours={course.hours}
          lessons={course.lessons} participants={course.participants} cost={course.cost}/>
      }
      )}
      <Outlet />
    </div>
    </div>
     );
}

export default Courses;