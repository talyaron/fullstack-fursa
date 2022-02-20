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
import {Link} from 'react-router-dom';


export interface teacherInfo {
    info: {
        firstName: string;
        lastName: string;
        id: string;
        phone: string;
        email: string;
    }
}

export default function SchoolTeachers() {

    const teachers: Array<teacherInfo> = [
        { info: { firstName: 'Suzan', lastName: 'Kassabry', id: '207745638', phone: '0537756048', email: 'suzankassabry97@gmail.com' } },
        { info: { firstName: 'Lama', lastName: 'Kassabry', id: '218439247', phone: '0537756048', email: 'suzankassabry97@gmail.com' } },
        { info: { firstName: 'Rania', lastName: 'Kassabry', id: '634892469', phone: '0537756048', email: 'suzankassabry97@gmail.com' } }
    ]

    return (
        <div className='container'>
            <div className='bar'>
                <   SchoolResponsiveAppBar></SchoolResponsiveAppBar>
            </div>

            <Link to='/newTeacher'>
                <Button className='newteacherBtn' variant="contained" size='small' startIcon={<EditIcon/>}>New Teacher</Button>
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
    );
}