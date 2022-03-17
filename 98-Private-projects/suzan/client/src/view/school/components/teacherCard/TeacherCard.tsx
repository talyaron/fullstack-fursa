import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useParams} from 'react-router-dom';
import { teacherInfo } from '../../pages/teachers/Teachers';
import {useState, useEffect } from 'react';
import axios from 'axios';
import './TeacherCard.scss';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getSchoolTeachersAsync, schoolTeachers } from '../../../../app/reducers/school/SchoolSlice';

export default function TeacherCard() {
    const { teacherId } = useParams();

    // const dispatch = useAppDispatch();
    // useEffect(() => {
    //     dispatch(getSchoolTeachersAsync());
    // }, []);
    const teachers = useAppSelector(schoolTeachers);

    function getTeacherInfo(id: string | undefined, teachers: Array<teacherInfo>) {
        const teacher = teachers.find(student => student.teacherID === id)
        if (teacher) {
            return [teacher.firstName, teacher.lastName, teacher.phone, teacher.email];
        } else {
            return ''
        }
    }

    const info = getTeacherInfo(teacherId, teachers);

    //0 first name //1 last name //2 phone //3 email

    return (
        <Card className='teacherCard' style={{ display: 'inline-block' }}>
            <CardContent className='content'>
                <h1> {info[0]} {info[1]} </h1>
                <p><span>teacher's id:</span> {teacherId}</p>
                <p><span>teacher's phone:</span> {info[2]}</p>
                <p><span>teacher's email:</span> {info[3]}</p>
            </CardContent>
        </Card>
    );
}