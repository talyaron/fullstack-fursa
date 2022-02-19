
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


const courses = [{id:1,name:'group lessons'}, {id:2,name:'private lessons'},{id:3,name:'single lesson'}];

function Courses() {



    return (

        <div className="maindiv">
     <Header />
            <h3>Courses and private lessons</h3>
            {/* <div className='calbtn'> */}
 <Link to={`/calender`}>
    < button className='calbtn'>
   Register </button>
 </Link>
     {/* </div> */}
     {/* <Link to={`/calender`}>Register 
 </Link> */}
      {/* <div className="course"></div> */}
   
            <div className="courses">
    {courses.map((course:coursesProps, i)=>{
          return <Course key={i} name={course.name} id={course.id} />
      })}
   
  
      <Outlet />
  </div>;
       
 
    </div>
    
                 

   

    );
}

export default Courses;