import { Link } from "react-router-dom";
import "./course.scss";

export interface coursesProps {
  name: string;
  id: number;
  hours:number;
  participants:number;
  cost:number;
}
const Course = (props: coursesProps) => {
  const { name, id ,hours,participants,cost} = props;

  return (
    <Link to={`/courses/${id}`}>
      <div className="course">{name}
        <p>{hours} hours</p>
   <p>{participants} participants</p>
        <p>cost :{cost}</p>
        </div>
    </Link>
  );
};

export default Course;
