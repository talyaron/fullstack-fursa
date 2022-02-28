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

    // const classes = [{ name: 'class 1A', teacher: 'Suzan Kassabry' }, { name: 'class 1B', teacher: 'Suzan Kassabry' },
    // { name: 'class 2A', teacher: 'Suzan Kassabry' }, { name: 'class 2B', teacher: 'Suzan Kassabry' },
    // { name: 'class 3A', teacher: 'Suzan Kassabry' }, { name: 'class 3B', teacher: 'Suzan Kassabry' },
    // { name: 'class 4A', teacher: 'Suzan Kassabry' }, { name: 'class 4B', teacher: 'Suzan Kassabry' }];
    
    // const [classes, setClasses] = useState([]);
    // useEffect(() => {
    //     axios.get('http://localhost:3004/schoolClasses').then(({ data }) => {
    //         console.log(data);
    //         setClasses(data);
    //     })
    // }, []);

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getSchoolClassesAsync());
        dispatch(getSchoolStudentsAsync());
        dispatch(getSchoolTeachersAsync());
    }, []);
    const classes = useAppSelector(schoolClasses);
    console.log(classes);
    
    return (


        <div className='container'>
            <div className='bar'>
                <   SchoolResponsiveAppBar></SchoolResponsiveAppBar>
            </div>
            <div className="subContainer">
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


        </div>
    );
}