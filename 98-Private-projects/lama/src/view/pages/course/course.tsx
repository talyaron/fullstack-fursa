import React from 'react'
import {useParams} from 'react-router-dom';

const courses = [{id:1,name:'course1'}, {id:2,name:'course2'},{id:3,name:'course3'}];

const Course = () => {
  const {courseId} = useParams();
 
  function getCourseName(id:string|undefined,courses:Array<any>):string {
    const course =  courses.find(course=> course.id == id)
    if(course){
      return course.name
    } else {
      return ''
    }
  }

  return (
    <div>
      <h1>Name: {getCourseName(courseId,courses)} </h1>
     <p> Course {courseId}</p>

      </div>
  )
}

export default Course