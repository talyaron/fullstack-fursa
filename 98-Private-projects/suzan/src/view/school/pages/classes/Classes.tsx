import react from 'react';
import SchoolResponsiveAppBar from '../../components/header/header';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import './Classes.scss';
import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ClassCard from '../../components/classCard/ClassCard';

export default function SchoolClasses() {

    const arr = [{ name: 'class 1A', teacher: 'Suzan Kassabry' }, { name: 'class 1B', teacher: 'Suzan Kassabry' },
    { name: 'class 2A', teacher: 'Suzan Kassabry' }, { name: 'class 2B', teacher: 'Suzan Kassabry' },
    { name: 'class 3A', teacher: 'Suzan Kassabry' }, { name: 'class 3B', teacher: 'Suzan Kassabry' },
    { name: 'class 4A', teacher: 'Suzan Kassabry' }, { name: 'class 4B', teacher: 'Suzan Kassabry' }];

    return (
        <div>
            <div className='bar'>
                <   SchoolResponsiveAppBar></SchoolResponsiveAppBar>
            </div>

            <div className="classesContainer">
                {
                    arr.map((classroom, index) => {
                        const { name, teacher } = classroom;
                        return (
                            <ClassCard key={index} info={classroom} />
                        );
                    })
                }
            </div>
        </div>
    );
}