import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import CourseCard from "../../components/courseCard/CourseCard";
import StudentResponsiveAppBar from "../../components/header/StudentAppBar";
import UpdatesList from "../../components/updatesList/UpdatesList";
import {Link} from 'react-router-dom';
import './StudentMainPage.scss';

const class_name = 'Class 1A';

const courses = [
    { name: "Arabic", teacher: "Manal Misherky" }, { name: "Mathmatics", teacher: "Manal Bisharat" },
    { name: "English", teacher: "Rania Ateek" }, { name: "Hebrew", teacher: "Areen Awwad" },
    { name: "Science", teacher: "Zahera Bisharat" }, { name: "Caution on streets", teacher: "Doaa margieh" }
]

const updates = [
    { update: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { update: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { update: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { update: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { update: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
]

export default function StudentMainPage() {
    return (
        <div>
            <div className="bar">
                <StudentResponsiveAppBar />
            </div>

            <div className="title">
                <Typography variant='h3' align='center'>{class_name}</Typography>
            </div>

            <div className="coursesAndRecentUpdates">

                <div className="coursesAndRecentUpdates__left">
                    <Divider >
                        <Typography variant='h5' >COURSES</Typography>
                    </Divider>

                    <div className="courses">
                        {
                            courses.map((course, i) => {
                                const { name, teacher } = course;
                                return (
                                    <Link to="../studentUser/coursePage">
                                        <CourseCard key={i} info={course} />
                                    </Link>
                                    
                                );
                            })
                        }
                    </div>

                </div>

                <span>
                    <Divider className='divider' orientation="vertical" variant="middle" flexItem></Divider>
                </span>

                <div className="coursesAndRecentUpdates__right">
                    <Typography className='title' variant='subtitle2' align='center'>RECENT UPDATES</Typography>
                    <UpdatesList updates={updates}></UpdatesList>
                </div>
            </div>
        </div>
    );
}