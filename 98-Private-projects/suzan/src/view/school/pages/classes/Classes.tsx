import react from 'react';
import SchoolResponsiveAppBar from '../../components/header/AppBar';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import './Classes.scss';
import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ClassCard from '../../components/classCard/ClassCard';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';

export default function SchoolClasses() {

    const arr = [{ name: 'class 1A', teacher: 'Suzan Kassabry' }, { name: 'class 1B', teacher: 'Suzan Kassabry' },
    { name: 'class 2A', teacher: 'Suzan Kassabry' }, { name: 'class 2B', teacher: 'Suzan Kassabry' },
    { name: 'class 3A', teacher: 'Suzan Kassabry' }, { name: 'class 3B', teacher: 'Suzan Kassabry' },
    { name: 'class 4A', teacher: 'Suzan Kassabry' }, { name: 'class 4B', teacher: 'Suzan Kassabry' }];

    return (
        <div className='container'>
            <div className='bar'>
                <   SchoolResponsiveAppBar></SchoolResponsiveAppBar>
            </div>

            <Link to='/newClass'>
                <Button className='newclassBtn' variant="contained" size='small' startIcon={<EditIcon />}>
                    Create new class
                </Button>
            </Link>

            <div className="classesContainer">
                {
                    arr.map((classroom, index) => {
                        const { name, teacher } = classroom;
                        return (
                            <Link to='/class'>
                                <ClassCard key={index} info={classroom} />
                            </Link>

                        );
                    })
                }
            </div>
        </div>
    );
}