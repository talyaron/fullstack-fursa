import List from '@mui/material/List';
import { teacherInfo } from '../../pages/teachers/Teachers';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { Link } from 'react-router-dom';
import './TeachersList.scss';

interface teachersArray {
    teachers: Array<teacherInfo>
}

export default function TeachersList(studentsArray: teachersArray) {
    const { teachers } = studentsArray;
    return (
        <div>
            <List className='teachersList' dense={true}>
                {
                    teachers.map((teacher, i) => {
                        const { id } = teacher.info;
                        return (
                            <Link to={`/teachers/${id}`}>
                                <ListItem className='teachersList__listItem'>
                                    <ListItemText
                                        className='teachersList__listItem__text'
                                        primary={teacher.info.firstName.concat(' ', teacher.info.lastName)}
                                        secondary={
                                            <div className='secondary'>
                                                <div>{'id: '.concat(teacher.info.id)}</div>
                                                <div>{'phone: '.concat(teacher.info.phone)}</div>
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