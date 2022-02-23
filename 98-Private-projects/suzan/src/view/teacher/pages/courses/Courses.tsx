import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import CourseCard from "../../components/courseCard/CourseCard";
import TeacherResponsiveAppBar from "../../components/header/TeacherAppBar";
import './Courses.scss';

const courses = [
    { name: "Arabic", class_name: "class 1A" }, { name: "Arabic", class_name: "class 1B" },
    { name: "Arabic", class_name: "class 2A" }, { name: "Hebrew", class_name: "class 2A" },
    { name: "Hebrew", class_name: "class 2B" }
]

export default function Courses() {
    return (
        <div className="container">

            <div className="bar">
                <TeacherResponsiveAppBar />
            </div>

            <div className="coursesContainer">
                <Divider className='divider'>
                    <Typography variant='h5' align='center'>MY COURSES</Typography>
                </Divider>

                <div className="coursesContainer__courses">

                    {
                        courses.map((course, i) => {
                            const { name, class_name } = course;
                            return (
                                <Link to="../teacherUser/coursePage">
                                    <CourseCard key={i} info={course} />
                                </Link>
                                
                            );
                        })
                    }
                </div>
            </div>



        </div>
    );
}