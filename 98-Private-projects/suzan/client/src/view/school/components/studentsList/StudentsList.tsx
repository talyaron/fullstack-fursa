import List from '@mui/material/List';
import { studentInfo } from '../../pages/students/Students';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import Divider from '@mui/material/Divider';
import './StudentsList.scss';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

interface studentsArray {
    students: Array<studentInfo>
}

export default function StudentsList(studentsArray: studentsArray) {
    const { students } = studentsArray;
    console.log(students);
    return (
        <div>
            <List className='studentsList' dense={true}>
                {
                    students.map((student, i) => {
                        const { studentID } = student;
                        return (
                            <div key={i}>
                                <Link to={`/students/${studentID}`}>
                                    <ListItem className='studentsList__listItem'>
                                        <ListItemText
                                            className='studentsList__listItem__text'
                                            primary={student.firstName.concat(' ', student.lastName)}
                                            secondary={
                                                <div className='secondary'>
                                                    <div>{'id: '.concat(student.studentID)}</div>
                                                    <div>{'phone: '.concat(student.phone)}</div>
                                                </div>
                                            }
                                        />
                                        <ListItemIcon className='studentsList__listItem__icon'>
                                            <ArrowCircleRightOutlinedIcon fontSize='large' sx={{ color: 'black' }} />
                                        </ListItemIcon>
                                    </ListItem>
                                </Link>
                            </div>

                        );
                    })
                }
            </List>
        </div >
    );
}