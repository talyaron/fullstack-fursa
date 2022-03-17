import List from '@mui/material/List';
import { teacherInfo } from '../../pages/teachers/Teachers';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { Link } from 'react-router-dom';
import './TeachersList.scss';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getSchoolTeachersAsync, schoolTeachers } from '../../../../app/reducers/school/SchoolSlice';
import { useEffect } from 'react';

interface teachersArray {
    teachers: Array<teacherInfo>
}

export default function TeachersList() {

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getSchoolTeachersAsync());
    }, []);
    const teachers = useAppSelector(schoolTeachers);
    console.log(teachers)

    // const { teachers } = studentsArray;
    return (
        <div>
            <List className='teachersList' dense={true}>
                {
                    teachers.map((teacher, i) => {
                        const { teacherID } = teacher;
                        return (
                            <Link to={`/teachers/${teacherID}`}>
                                <ListItem className='teachersList__listItem'>
                                    <ListItemText
                                        className='teachersList__listItem__text'
                                        primary={teacher.firstName.concat(' ', teacher.lastName)}
                                        secondary={
                                            <div className='secondary'>
                                                <div>{'id: '.concat(teacher.teacherID)}</div>
                                                <div>{'phone: '.concat(teacher.phone)}</div>
                                            </div>
                                        }
                                    />
                                    <ListItemIcon className='teachersList__listItem__icon'>
                                        <ArrowCircleRightOutlinedIcon fontSize='large' sx={{ color: 'black' }} />
                                    </ListItemIcon>
                                </ListItem>
                            </Link>

                        );
                    })
                }
            </List>
        </div >
    );
}