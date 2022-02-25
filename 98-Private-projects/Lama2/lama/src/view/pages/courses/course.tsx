import { Link } from "react-router-dom";
import "./course.scss";

export interface coursesProps {
  name: string;
  id: number;
  hours:number;
  lessons:number;
  participants:number;
  cost:number;
}
const Course = (props: coursesProps) => {
  const { name, id ,hours,lessons,participants,cost} = props;

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
        cost :{cost}
        </div>
  );
};

export default Course;
