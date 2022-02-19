import React from 'react'
import {useParams} from 'react-router-dom';

const courses = [{id:1,name:'group lessons'}, {id:2,name:'private lessons'},{id:3,name:'single lesson'}];

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
      <h4>{getCourseName(courseId,courses)} </h4>
     <p> Course {courseId}</p>

      </div>
  )
}

export default Course