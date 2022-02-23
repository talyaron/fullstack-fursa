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


export interface studentInfo {
    info: {
        firstName: string;
        lastName: string;
        father: string;
        mother: string;
        id: string;
        phone:string;
        fphone: string;
        mphone: string;
        email: string;
    }
}

export default function SchoolStudents() {

    const students:Array<studentInfo> = [
        {info: {firstName:'Suzan', lastName:'Kassabry', father:'Emad', mother:'Linda', id:'207745638', phone:'0537756048', fphone:'0537756048', mphone:'0537756048', email:'suzankassabry97@gmail.com'}},
        {info: {firstName:'Maria', lastName:'Kassabry', father:'Emad', mother:'Linda', id:'218439247', phone:'0537756048', fphone:'0537756048', mphone:'0537756048', email:'suzankassabry97@gmail.com'}},
        {info: {firstName:'Nora', lastName:'Kassabry', father:'Emad', mother:'Linda', id:'634892469', phone:'0537756048', fphone:'0537756048', mphone:'0537756048', email:'suzankassabry97@gmail.com'}}
    ]

    return (
        <div className='container'>
            <div className='bar'>
                <   SchoolResponsiveAppBar></SchoolResponsiveAppBar>
            </div>

            <Link to='/newStudent'>
                <Button className='newstudentBtn' variant="contained" size='small' startIcon={<EditIcon/>}>New Student</Button>
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
                    <StudentsList students={students}/>
                </div>
                <div className="students__info">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}