import react from 'react';
import SchoolResponsiveAppBar from '../../components/header/AppBar';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import List from '@mui/material/List';
import './Students.scss';
import StudentsList from '../../components/studentsList/StudentsList';
import { Link, Outlet } from 'react-router-dom';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getSchoolStudentsAsync, schoolStudents } from '../../../../app/reducers/school/SchoolSlice';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';


export interface studentInfo {
    id:number;
    username:string;
    password:string;
    firstName: string;
    lastName: string;
    fatherName: string;
    motherName: string;
    studentID: string;
    phone: string;
    fatherPhone: string;
    motherPhone: string;
    email: string;
    status:string;
    schoolID: number;
    classID: number;

}

export default function SchoolStudents() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getSchoolStudentsAsync());
    }, []);
    const students = useAppSelector(schoolStudents);

    return (
        <div>
            <div className='bar'>
                <   SchoolResponsiveAppBar></SchoolResponsiveAppBar>
            </div>

            <div className="studentsPageContent">
                <Link to='/newStudent'>
                    <Button className='newstudentBtn' variant="contained" size='small' startIcon={<EditIcon />}>New Student</Button>
                </Link>

                <div className="search">
                    <TextField
                        id="outlined-basic"
                        label="search by name, id, email..."
                        variant="outlined"
                        size="small"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />

                </div>

                <div className="students">
                    <div className="students__list">
                        <StudentsList students={students} />
                    </div>
                    <div className="students__info">
                        <Outlet />
                    </div>
                </div>
            </div>

        </div>
    );
}