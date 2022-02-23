import ClassCard from "../../components/classCard/ClassCard";
import CourseCard from "../../components/courseCard/CourseCard";
import TeacherResponsiveAppBar from "../../components/header/TeacherAppBar";
import Divider from '@mui/material/Divider';
import Typography from "@mui/material/Typography";

import './TeacherMainPage.scss';
import { Link } from "react-router-dom";

const classes = [{ class_name: 'Class 1A' }];
const courses = [
    { name: "Arabic", class_name: "class 1A" }, { name: "Arabic", class_name: "class 1B" },
    { name: "Arabic", class_name: "class 2A" }, { name: "Hebrew", class_name: "class 2A" },
    { name: "Hebrew", class_name: "class 2B" }
]

export default function TeacherMainPage() {
    return (
        <div>

            <div className="bar">
                <TeacherResponsiveAppBar />
            </div>

            <div className="ClassAndCourses">

                <Divider>
                <Typography variant='h5' align='center'>MY CLASS</Typography>
                </Divider>

                <div className="myClass">
                    {
                        classes.map((myClass, i) => {
                            const { class_name } = myClass
                            return (
                                <ClassCard class_name={class_name} />
                            );
                        })
                    }
                </div>

                <Divider>
                    <Typography variant='h5' align='center'>MY COURSES</Typography>
                </Divider>

                <div className="myCourses">
                    {
                        courses.map((course, i) => {
                            const { name, class_name } = course;
                            return (
                                <Link to="../teacherUser/coursePage">
                                    <CourseCard info={course} />
                                </Link>
                                
                            );
                        })
                    }
                </div>
            </div>

        </div>
    );
}