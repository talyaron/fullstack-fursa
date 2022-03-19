import { Link } from "react-router-dom";
import "./course.scss";

export interface coursesProps {
  name: string;
  hours:number;
  lessons:number;
  participants:string;
  cost:number;
}
const Course = (props: coursesProps) => {
  const {name,hours,lessons,participants,cost} = props;

  return (
      <div className="course">
        {name}
        <br></br>
       {hours} hours
       <br></br>
      {lessons} lessons
      <br></br>
   {participants} participants
   <br></br>
        cost per participant :{cost}
        </div>
  );
};

export default Course;
