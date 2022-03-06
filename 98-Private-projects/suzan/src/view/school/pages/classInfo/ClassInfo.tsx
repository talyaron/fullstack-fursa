import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import react from 'react-router-dom'
import { useAppSelector } from '../../../../app/hooks';
import { selectedClassName, selectedTeacherName } from '../../../../app/reducers/school/ClassCardSlice';
import ClassTabsBar from '../../components/classTabsBar/ClassTabsBar';
import SchoolResponsiveAppBar from '../../components/header/AppBar';
import './ClassInfo.scss';

export default function ClassInfo() {


    const class_name = useAppSelector(selectedClassName);
    const teacher_name = useAppSelector(selectedTeacherName);

    if (class_name && teacher_name) {
        localStorage.setItem('name', class_name)
        localStorage.setItem('teacher', teacher_name)
    }

    return (
        <div className="container">

            <div className="bar">
                <SchoolResponsiveAppBar></SchoolResponsiveAppBar>
            </div>

            <div className="className">
                <Typography variant='h3' align='center'>{localStorage.getItem('name')}</Typography>
                <Typography variant='h5' align='center'>{localStorage.getItem('teacher')}</Typography>
            </div>

            <div className="tabsBar">
                <ClassTabsBar></ClassTabsBar>
            </div>

        </div>
    );
}