import React from 'react'
import {useParams} from 'react-router-dom';


const courses = [{id:1,name:'group lessons',hours:5,participants:10,cost:1000}, {id:2,name:'private lessons',hours:5,participants:1,cost:1200},{id:3,name:'single lesson',hours:5,participants:1,cost:100}];

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
     {/* <p>{hours} hours</p>
   <p>{participants} participants</p>
        <p>cost :{cost}</p> */}

      </div>
  )
}

export default Course