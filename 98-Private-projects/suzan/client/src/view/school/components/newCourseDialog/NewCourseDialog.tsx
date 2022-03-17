import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {useAppDispatch, useAppSelector} from '../../../../app/hooks';
import { getSchoolTeachersAsync, schoolTeachers } from '../../../../app/reducers/school/SchoolSlice';

interface dialogProps {
    open: any;
    setOpen: any;
}

// const teachers = [
//     { label: 'Suzan Kassabry' },
//     { label: 'Lama Bisharat' },
//     { label: 'Rania Ateek' },
//     { label: 'Suzan Kassabry 2' },
//     { label: 'Lama Bisharat 2' },
//     { label: 'Rania Ateek 2' }
// ]

export default function NewCourseDialog(props: dialogProps) {
    const { open, setOpen } = props
    const [courseName, setCourseName] = useState("");
    const [teacherName, setTeacherName] = useState("");
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getSchoolTeachersAsync);
    },[])
    const teachers = useAppSelector(schoolTeachers);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCreate = () => {
        axios.post('http://localhost:3004/studentCourses', { 'name': courseName, 'teacher': teacherName })
            .then(({ data }) => console.log(data));
        // dispatch(getSchoolTeachersAsync);
        handleClose();
    }

    function handleCourseNameUpdate(ev:any) {
        // console.log(ev.target.value);
        setCourseName(ev.target.value);
    };

    function handleChange(ev:any, value:any) {
        // console.log(value.info.firstName.concat(' ', value.info.lastName));
        setTeacherName(value.info.firstName.concat(' ', value.info.lastName));
    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>new Course</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        enter the course name:
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="course name"
                        type="text"
                        fullWidth
                        variant="standard"
                        required
                        onKeyUp={handleCourseNameUpdate}
                    />
                </DialogContent>
                <DialogContent>
                    <DialogContentText>
                        select the course's teacher:
                    </DialogContentText>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={teachers}
                        getOptionLabel={(option) => option.firstName.concat(' ', option.lastName)}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="search or select teacher" />}
                        size="small"
                        className='inputField'
                        isOptionEqualToValue={(option, value) => option.teacherID === value.teacherID}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleCreate}>create</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
