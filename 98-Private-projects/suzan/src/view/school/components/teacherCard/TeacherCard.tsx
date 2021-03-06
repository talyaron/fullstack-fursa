import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useParams} from 'react-router-dom';
import { teacherInfo } from '../../pages/teachers/Teachers';
import {useState, useEffect } from 'react';
import axios from 'axios';
import './TeacherCard.scss';

// const teachers: Array<teacherInfo> = [
//     { info: { firstName: 'Suzan', lastName: 'Kassabry', teacherId: '207745638', phone: '0537756048', email: 'suzankassabry97@gmail.com' } },
//     { info: { firstName: 'Lama', lastName: 'Kassabry', teacherId: '218439247', phone: '0537756048', email: 'suzankassabry97@gmail.com' } },
//     { info: { firstName: 'Rania', lastName: 'Kassabry', teacherId: '634892469', phone: '0537756048', email: 'suzankassabry97@gmail.com' } }
// ]

export default function TeacherCard() {
    const { teacherId } = useParams();
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3004/schoolTeachers').then(({data})=>{
            console.log(data);
            setTeachers(data);
    })
    }, []);

    function getTeacherInfo(id: string | undefined, teachers: Array<teacherInfo>) {
        const teacher = teachers.find(student => student.info.teacherId === id)
        if (teacher) {
            return [teacher.info.firstName, teacher.info.lastName, teacher.info.phone, teacher.info.email];
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