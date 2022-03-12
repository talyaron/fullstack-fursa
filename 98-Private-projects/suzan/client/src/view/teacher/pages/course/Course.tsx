import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { selectedClassName, selectedCourseName } from "../../../../app/reducers/teacher/CourseCardSlice";
import CourseResponsiveAppBar from "../../components/courseHeader/CourseAppBar";
import MaterialSection from "../../components/materialSection/MaterialSection";
import UpdatesList from "../../components/updatesList/UpdatesList";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../../../../app/hooks';
import './Course.scss';
import { courseMaterial, getMaterialAsync } from "../../../../app/reducers/teacher/CourseDataSlice";
import Button from "@mui/material/Button";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import NewMaterialDialog from "../../components/newMaterialDialog/NewMaterialDialog";
import NewHomeworkDialog from "../../components/newHomeworkDialog/NewHomeworkDialog";
import NewExamDialog from "../../components/newExamDialog/NewExamDialog";

// const materials = [
//     { title: 'material title1', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
//     { title: 'material title2', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
//     { title: 'material title3', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
//     { title: 'material title4', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
//     { title: 'material title5', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
// ]

const updates = [
    { update: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { update: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { update: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { update: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { update: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
]

export default function Course() {
    const courseName = useAppSelector(selectedCourseName);
    const className = useAppSelector(selectedClassName);
    const [openMaterialDialog, setOpenMaterialDialog] = useState(false);
    const [openHomeworkDialog, setOpenHomeworkDialog] = useState(false);
    const [openExamDialog, setOpenExamDialog] = useState(false);

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getMaterialAsync());
    }, []);
    const materials = useAppSelector(courseMaterial);

    function handleOpenMaterialDialog(){
        setOpenMaterialDialog(true)
    }

    function handleOpenHomeworkDialog(){
        setOpenHomeworkDialog(true)
    }

    function handleOpenExamDialog() {
        setOpenExamDialog(true)
    }

    return (
        <div>
            <div className="bar">
                <CourseResponsiveAppBar></CourseResponsiveAppBar>
            </div>

            <div className="teacherCoursePageContent">

                <div className="title">
                    <Typography variant='h3' align='center'>{courseName}</Typography>
                    <Typography variant='h5' align='center'>{className}</Typography>
                </div>

                <div className="buttons">
                    <Button variant="outlined" startIcon={<AddOutlinedIcon />} onClick={handleOpenMaterialDialog}>Material</Button>
                    <Button variant="outlined" startIcon={<AddOutlinedIcon />} onClick={handleOpenHomeworkDialog}>Homework</Button>
                    <Button variant="outlined" startIcon={<AddOutlinedIcon />} onClick={handleOpenExamDialog}>Exam</Button>
                    <Button variant="outlined" startIcon={<AddOutlinedIcon />} disabled>Update</Button>

                    <NewMaterialDialog open={openMaterialDialog} setOpen={setOpenMaterialDialog}/>
                    <NewHomeworkDialog open={openHomeworkDialog} setOpen={setOpenHomeworkDialog}/>
                    <NewExamDialog open={openExamDialog} setOpen={setOpenExamDialog}/>
                </div>

                <div className="course">
                    <div className="course__material">
                        <Divider >
                            <Typography variant='h5' >COURSE MATERIAL</Typography>
                        </Divider>

                        {
                            materials.map((material, i) => {
                                const { title, description } = material;
                                return (
                                    <MaterialSection key={i} title={title} description={description} />
                                );
                            })
                        }
                    </div>

                    <span>
                        <Divider className='divider' orientation="vertical" variant="middle" flexItem></Divider>
                    </span>




                    <div className="course__recentUpdates">
                        <Typography className='title' variant='subtitle2' align='center'>RECENT UPDATES</Typography>
                        <UpdatesList updates={updates} />
                    </div>
                </div>

            </div>

        </div>
    );
}