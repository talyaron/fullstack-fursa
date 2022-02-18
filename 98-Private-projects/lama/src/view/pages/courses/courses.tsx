
import  './course.scss';
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


const courses = [{id:1,name:'course1'}, {id:2,name:'course2'},{id:3,name:'course3'}];

function Courses() {



    return (

        <div className="maindiv">
     <Header />
            <h3>Courses and private lessons</h3>
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