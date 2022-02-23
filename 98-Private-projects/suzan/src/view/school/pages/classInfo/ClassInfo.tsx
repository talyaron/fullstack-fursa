import Typography from '@mui/material/Typography';
import react from 'react-router-dom'
import { useAppSelector } from '../../../../app/hooks';
import { selectedClassName, selectedTeacherName } from '../../../../app/reducers/school/ClassCardSlice';
import ClassTabsBar from '../../components/classTabsBar/ClassTabsBar';
import SchoolResponsiveAppBar from '../../components/header/AppBar';
import './ClassInfo.scss';

export default function ClassInfo() {
    const class_name = useAppSelector(selectedClassName);
    const teacher_name = useAppSelector(selectedTeacherName);

    return (
        <div className="container">

            <div className="bar">
                <SchoolResponsiveAppBar></SchoolResponsiveAppBar>
            </div>

            <div className="className">
                <Typography variant='h3' align='center'>{class_name}</Typography>
                <Typography variant='h5' align='center'>{teacher_name}</Typography>
            </div>

            <div className="tabsBar">
                <ClassTabsBar></ClassTabsBar>
            </div>

        </div>
    );
}