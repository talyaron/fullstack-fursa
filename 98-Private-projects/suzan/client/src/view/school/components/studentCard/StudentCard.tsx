import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useParams } from 'react-router-dom';
import { studentInfo } from '../../pages/students/Students';
import {useState, useEffect } from 'react';
import axios from 'axios';
import './StudentCard.scss';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getSchoolStudentsAsync, schoolStudents } from '../../../../app/reducers/school/SchoolSlice';

// const students: Array<studentInfo> = [
//     { info: { firstName: 'Suzan', lastName: 'Kassabry', father: 'Emad', mother: 'Linda', studentId: '207745638', phone: '0537756048', fphone: '0537756048', mphone: '0537756048', email: 'suzankassabry97@gmail.com' } },
//     { info: { firstName: 'Maria', lastName: 'Kassabry', father: 'Emad', mother: 'Linda', studentId: '218439247', phone: '0537756048', fphone: '0537756048', mphone: '0537756048', email: 'suzankassabry97@gmail.com' } },
//     { info: { firstName: 'Nora', lastName: 'Kassabry', father: 'Emad', mother: 'Linda', studentId: '634892469', phone: '0537756048', fphone: '0537756048', mphone: '0537756048', email: 'suzankassabry97@gmail.com' } }
// ]

export default function StudentCard() {
    const { studentId } = useParams();
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getSchoolStudentsAsync());
    }, []);
    const students = useAppSelector(schoolStudents);

    function getStudentInfo(id: string | undefined, students: Array<studentInfo>) {
        const student = students.find(student => student.studentID === id)
        
        if (student) {
            return [student.firstName, student.lastName, student.fatherName, student.motherName, student.phone, student.fatherPhone, student.motherPhone, student.email];
        } else {
            return ''
        }
    }

    const info = getStudentInfo(studentId, students);

    //0 first name //1 last name //2 father//3 mother
    //4 phone //5 fphone //6 mphone //7 email

    return (
        <Card className='studentCard' style={{ display: 'inline-block' }}>
            {/* <h1> {info[0]} {info[1]} </h1>
            <p><span>student's id:</span> {studentId}</p>
            <p><span>student's email:</span> {info[7]}</p>
            <p><span>father's name:</span> {info[2]}</p>
            <p><span>father's phone:</span> {info[5]}</p>
            <p><span>mother's name:</span> {info[3]}</p>
            <p><span>mother's phone:</span> {info[6]}</p>
            <p><span>student's email:</span> {info[7]}</p> */}
            <CardContent className='content'>
                <h1> {info[0]} {info[1]} </h1>
                <p><span>student's id:</span> {studentId}</p>
                <p><span>student's phone:</span> {info[4]}</p>
                <p><span>father's name:</span> {info[2]}</p>
                <p><span>father's phone:</span> {info[5]}</p>
                <p><span>mother's name:</span> {info[3]}</p>
                <p><span>mother's phone:</span> {info[6]}</p>
                <p><span>student's email:</span> {info[7]}</p>
            </CardContent>
        </Card>
    );
}