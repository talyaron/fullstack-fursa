import { Link } from "react-router-dom";
import "./course.scss";

export interface coursesProps {
  name: string;
  id: number;
}
const Course = (props: coursesProps) => {
  const { name, id } = props;

  return (
    <Link to={`/courses/${id}`}>
      <div className="course">{name}</div>
    </Link>
  );
};

export default Course;
