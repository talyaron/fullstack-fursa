import Button from '@mui/material/Button';
import SchoolResponsiveAppBar from '../../components/header/AppBar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import './NewClass.scss';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useAppSelector, useAppDispatch } from '../../../../app/hooks';
import { getSchoolClassesAsync, getSchoolStudentsAsync, getSchoolTeachersAsync, schoolClasses, schoolStudents, schoolTeachers } from '../../../../app/reducers/school/SchoolSlice';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// const teachers = [
//     { label: 'Suzan Kassabry' },
//     { label: 'Lama Bisharat' },
//     { label: 'Rania Ateek' }
// ]

// const students = [
//     { name: 'Suzan Kassabry 1' }, { name: 'Suzan Kassabry 2' }, { name: 'Suzan Kassabry 3' }, { name: 'Suzan Kassabry 4' },
//     { name: 'Suzan Kassabry 5' }, { name: 'Suzan Kassabry 6' }, { name: 'Suzan Kassabry 7' }, { name: 'Suzan Kassabry 8' }
// ]

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function NewClass() {

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getSchoolClassesAsync());
        dispatch(getSchoolStudentsAsync());
        dispatch(getSchoolTeachersAsync());
    }, []);
    const students = useAppSelector(schoolStudents);
    const teachers = useAppSelector(schoolTeachers);

    const [className, setClassName] = useState('');
    const [teacherName, setTeacherName] = useState('');

    function handleClassName(ev: any) {
        // console.log(ev.target.value);
        setClassName(ev.target.value)
    }

    function handleTeacherName(ev: any, value: any) {
        // console.log(value.info.firstName.concat(' ', value.info.lastName));
        setTeacherName(value.info.firstName.concat(' ', value.info.lastName))
    }

    function handleStudent(ev: any, value: any) {
        // console.log(value);
    }

    function addNewClass() {
        axios.post('http://localhost:3004/schoolClasses', { 'name': className, 'teacher': teacherName })
            .then(({ data }) => console.log(data));
    }

    return (
        <div className='container'>

            <div className="bar">
                <SchoolResponsiveAppBar></SchoolResponsiveAppBar>
            </div>

            <div className="subContainer">
                <Link to='../classes'>
                    <Button className='createClassBtn' variant="contained" size='small' onClick={addNewClass}>
                        Submit
                    </Button>
                </Link>


                <div className="newClass">
                    <div className="newClass__section">
                        <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
                            Class name:
                        </Typography>
                        <TextField
                            required
                            id="outlined-required"
                            label="Class name required"
                            size='small'
                            className='inputField'
                            onKeyUp={handleClassName}
                        />
                    </div>

                    <div className="newClass__section">
                        <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
                            Teacher:
                        </Typography>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={teachers}
                            getOptionLabel={(option) => option.info.firstName.concat(' ', option.info.lastName)}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="select or serch for teacher" />}
                            size="small"
                            className='inputField'
                            isOptionEqualToValue={(option, value) => option.info.teacherId === value.info.teacherId}
                            onChange={handleTeacherName}
                        />
                    </div>

                    <div className="newClass__section">
                        <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
                            select the students:
                        </Typography>
                        <Autocomplete
                            multiple
                            id="checkboxes-tags-demo"
                            options={students}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option.info.firstName.concat(' ', option.info.lastName)}
                            renderOption={(props, option, { selected }) => (
                                <li {...props}>
                                    <Checkbox
                                        icon={icon}
                                        checkedIcon={checkedIcon}
                                        style={{ marginRight: 8 }}
                                        checked={selected}
                                    />
                                    {option.info.firstName.concat(' ', option.info.lastName)}
                                </li>
                            )}
                            style={{ width: 500 }}
                            renderInput={(params) => (
                                <TextField {...params} label="select or search students" placeholder="Favorites" />
                            )}
                            size="small"
                            className='inputField'
                            isOptionEqualToValue={(option, value) => option.info.studentId === value.info.studentId}
                            onChange={handleStudent}
                        />
                    </div>
                </div>

            </div>



        </div>
    );
}