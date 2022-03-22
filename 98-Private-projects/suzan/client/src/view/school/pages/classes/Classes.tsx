import SchoolResponsiveAppBar from '../../components/header/AppBar';
import './Classes.scss';
import Button from '@mui/material/Button';
import ClassCard from '../../components/classCard/ClassCard';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../../../../app/hooks';
import { getSchoolClassesAsync, getSchoolStudentsAsync, getSchoolTeachersAsync, schoolClasses } from '../../../../app/reducers/school/SchoolSlice';

export default function SchoolClasses() {
    

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getSchoolClassesAsync());
        dispatch(getSchoolStudentsAsync());
        dispatch(getSchoolTeachersAsync());
    }, []);
    const classes = useAppSelector(schoolClasses);
    // console.log(classes);
    
    return (


        <div>
            <div className='bar'>
                <   SchoolResponsiveAppBar></SchoolResponsiveAppBar>
            </div>
            <div className="classesPageContent">
                <div className="newclassBtn">
                    <Link to='/newClass'>
                        <Button variant="contained" size='small' startIcon={<EditIcon />}>
                            Create new class
                        </Button>
                    </Link>
                </div>


                <div className="classesContainer">
                {/* console.log(classes); */}
                    {
                        
                        classes.map((classroom, index) => {
                            const { name, firstName, lastName } = classroom;
                            return (
                                <Link to='/class' key={index}>
                                    <ClassCard key={index} info={classroom} />
                                </Link>

                            );
                        })
                    }
                </div>
            </div>


        </div>
    );
}