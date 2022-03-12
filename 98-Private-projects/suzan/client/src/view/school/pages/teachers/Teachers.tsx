import react from 'react';
import SchoolResponsiveAppBar from '../../components/header/AppBar';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { Outlet } from 'react-router-dom';
import TeachersList from '../../components/teachersList/TeachersList';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import './Teachers.scss';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { getSchoolTeachersAsync, schoolTeachers } from '../../../../app/reducers/school/SchoolSlice';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';


export interface teacherInfo {
    info: {
        firstName: string;
        lastName: string;
        teacherId: string;
        phone: string;
        email: string;
    }
}

export default function SchoolTeachers() {

    // const teachers: Array<teacherInfo> = [
    //     { info: { firstName: 'Suzan', lastName: 'Kassabry', teacherId: '207745638', phone: '0537756048', email: 'suzankassabry97@gmail.com' } },
    //     { info: { firstName: 'Lama', lastName: 'Kassabry', teacherId: '218439247', phone: '0537756048', email: 'suzankassabry97@gmail.com' } },
    //     { info: { firstName: 'Rania', lastName: 'Kassabry', teacherId: '634892469', phone: '0537756048', email: 'suzankassabry97@gmail.com' } }
    // ]

    // const [teachers, setTeachers] = useState([]);
    // useEffect(() => {
    //     axios.get('http://localhost:3004/schoolTeachers').then(({data})=>{
    //         console.log(data);
    //         setTeachers(data);
    // })
    // }, []);

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getSchoolTeachersAsync());
    }, []);
    const teachers = useAppSelector(schoolTeachers);

    return (
        <div>
            <div className='bar'>
                <   SchoolResponsiveAppBar></SchoolResponsiveAppBar>
            </div>

            <div className="teachersPageContent">
                <Link to='/newTeacher'>
                    <Button className='newteacherBtn' variant="contained" size='small' startIcon={<EditIcon />}>New Teacher</Button>
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

                <div className="teachers">
                    <div className="teachers__list">
                        <TeachersList teachers={teachers} />
                    </div>
                    <div className="teachers__info">
                        <Outlet />
                    </div>
                </div>
            </div>

        </div>
    );
}