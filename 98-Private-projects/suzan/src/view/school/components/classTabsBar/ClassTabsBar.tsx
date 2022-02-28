import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CourseCard from '../courseCard/CourseCard';
import './ClassTabsBar.scss';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import NewCourseDialog from '../newCourseDialog/NewCourseDialog';
import EditStudentsDialog from '../editStudentsDialog/EditStudentsDialog';
import { useAppSelector, useAppDispatch } from '../../../../app/hooks';
import { classCourses, classStudents, classTeachers, getCoursesAsync, getStudentsAsync, getTeachersAsync } from '../../../../app/reducers/school/ClassDetailsSlice';
import { selectedClassName, selectedTeacherName } from '../../../../app/reducers/school/ClassCardSlice';
import { schoolTeachers } from '../../../../app/reducers/school/SchoolSlice';
import axios from 'axios';

// const courses = [
//     { name: "Arabic", teacher: "Manal Misherky" }, { name: "Mathmatics", teacher: "Manal Bisharat" },
//     { name: "English", teacher: "Rania Ateek" }, { name: "Hebrew", teacher: "Areen Awwad" },
//     { name: "Science", teacher: "Zahera Bisharat" }, { name: "Caution on the streets", teacher: "Doaa margieh" }
// ]

// const students = [
//     { first: "Suzan", last: "Kassabry 1", id: "123456789", phone: "0537756044" },
//     { first: "Suzan", last: "Kassabry 2", id: "123456789", phone: "0537756044" },
//     { first: "Suzan", last: "Kassabry 3", id: "123456789", phone: "0537756044" },
//     { first: "Suzan", last: "Kassabry 4", id: "123456789", phone: "0537756044" },
//     { first: "Suzan", last: "Kassabry 5", id: "123456789", phone: "0537756044" },
//     { first: "Suzan", last: "Kassabry 6", id: "123456789", phone: "0537756044" },
//     { first: "Suzan", last: "Kassabry 7", id: "123456789", phone: "0537756044" },
//     { first: "Suzan", last: "Kassabry 8", id: "123456789", phone: "0537756044" },
//     { first: "Suzan", last: "Kassabry 9", id: "123456789", phone: "0537756044" },
//     { first: "Suzan", last: "Kassabry 10", id: "123456789", phone: "0537756044" }
// ]

interface teacherObj {
    id: 1,
    info: {
        firstName: string,
        lastName: string,
        teacherId: string,
        phone: string,
        email: string
    }
}

const teachers = [
    { label: 'Suzan Kassabry' },
    { label: 'Lama Bisharat' },
    { label: 'Rania Ateek' }
]

// const teacherName = { label: 'Lama Bisharat' };

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}



function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function ClassTabsBar() {
    const [value, setValue] = React.useState(0);
    const [disableEditTeacher, setDisableEditTeacher] = useState(true); //abling and disabiling teacher texfeild
    const [editTeacherBtn, setEditTeacherBtn] = useState('Edit'); //to edit the txt on the button
    const [openCourseDialog, setOpenCourseDialog] = useState(false); //opening and closing new course dialog
    const [openStudentsDialog, setOpenStudentsDialog] = useState(false); //opening and closing editting students dialog
    const [newTeacherName, setNewTeacherName] = useState({}); //the new selected teacher :obj
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getCoursesAsync());
        dispatch(getStudentsAsync());
        dispatch(getTeachersAsync());
    }, [])
    const courses = useAppSelector(classCourses); //the class courses
    const students = useAppSelector(classStudents); //the class students
    const teachers = useAppSelector(schoolTeachers); //the school teachers
    const teacherName = useAppSelector(selectedTeacherName); //the class teacher name : string
    const className = useAppSelector(selectedClassName); //the class name :string
    const [classId, setClassId] = useState(null);
    const [newTeacher, setNewTeacher] = useState('');
    const defaultTeacher = findDefaultTeacherObj(); //the class teacher : obj

    useEffect(() => {
        axios.get(`http://localhost:3004/schoolClasses?name=${className}`)
            .then(({ data }) => setClassId(data[0].id));
    }, [])

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    function handleTeacherChange(ev: any, value: any) {
        // console.log('selected teacher');
        // console.log(value);
        setNewTeacherName(value);
        if (value !== null) {
            setNewTeacher(value.info.firstName.concat(' ', value.info.lastName));
        }
        
    }

    function editTeacher() {
        const edit = !disableEditTeacher;
        setDisableEditTeacher(!disableEditTeacher);
        if (!edit) { //let the user the option to edit 
            setEditTeacherBtn('Save');
        } else { //save the user's edit
            setEditTeacherBtn('Edit')
            if (newTeacherName === {} || newTeacherName === null) { //no teacher was selected
                console.log('not selected')
            } else { //new teacher was selected
                console.log('selected');
                console.log(newTeacherName)
                axios.patch(`http://localhost:3004/schoolClasses/${classId}`,
                    { teacher: `${newTeacher}` })
            }
        }
    }

    function handleOpenCourseDialog() {
        setOpenCourseDialog(true);
    }

    function handleOpenStudentsDialog() {
        setOpenStudentsDialog(true);
    }

    function findDefaultTeacherObj() {
        for (let i = 0; i < teachers.length; i++) {
            if (teachers[i].info.firstName.concat(' ', teachers[i].info.lastName) === teacherName) {
                return teachers[i];
            }
        }
        console.log('null')

        return null;
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Courses" {...a11yProps(0)} />
                    <Tab label="Students" {...a11yProps(1)} />
                    <Tab label="Teacher" {...a11yProps(2)} />
                </Tabs>
            </Box>

            {/* courses tab */}
            <TabPanel value={value} index={0}>
                <div className="courses">

                    <Button className='newcourseBtn' variant="contained" size='small' onClick={handleOpenCourseDialog}>
                        add course
                    </Button>

                    <NewCourseDialog open={openCourseDialog} setOpen={setOpenCourseDialog} />

                    <div className="coursesWrapper">
                        {
                            courses.map((course, i) => {
                                const { name, teacher } = course;
                                return (
                                    <CourseCard key={i} info={course} />
                                );
                            })
                        }
                    </div>
                </div>

            </TabPanel>

            {/* students tab */}
            <TabPanel value={value} index={1}>
                <div className="studentsList">
                    <Button className='editStudents' variant="contained" size='small' onClick={handleOpenStudentsDialog}>
                        add / remove students
                    </Button>

                    <EditStudentsDialog open={openStudentsDialog} setOpen={setOpenStudentsDialog} />

                    <List className='list' dense={true}>
                        {
                            students.map((student, i) => {
                                const { first, last, studentId, phone } = student;
                                return (
                                    <ListItem key={i} className='studentsList__listItem' divider={true}>
                                        <ListItemText
                                            className='studentsList__listItem__text'
                                            primary={first.concat(' ', last)}
                                            secondary={
                                                <div className='secondary'>
                                                    <div>{'id: '.concat(studentId)}</div>
                                                    <div>{'phone: '.concat(phone)}</div>
                                                </div>
                                            }
                                        />
                                    </ListItem>

                                );
                            })
                        }
                    </List>


                </div>

            </TabPanel>

            {/* teacher tab */}
            <TabPanel value={value} index={2}>
                {/* Item Three */}
                <div className="teacher">

                    <Button className='editTeacher' variant="contained" size='small' onClick={editTeacher}>
                        {editTeacherBtn}
                    </Button>

                    <div className="teacher__info">
                        <Typography sx={{ fontSize: 18 }} color="text.primary"  >{"Class's teacher: "}</Typography>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            disabled={disableEditTeacher}
                            options={teachers}
                            getOptionLabel={(option) => option.info.firstName.concat(' ', option.info.lastName)}
                            defaultValue={defaultTeacher}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} />}
                            size="small"
                            className='inputField'
                            isOptionEqualToValue={(option, value) => option.info.teacherId === value.info.teacherId}
                            onChange={handleTeacherChange}
                        />
                    </div>

                </div>
            </TabPanel>
        </Box>
    );
}
