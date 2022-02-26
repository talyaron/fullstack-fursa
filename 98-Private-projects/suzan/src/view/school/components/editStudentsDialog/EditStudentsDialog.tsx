import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useAppSelector } from '../../../../app/hooks';
import { classStudents } from '../../../../app/reducers/school/ClassDetailsSlice';
import { schoolStudents } from '../../../../app/reducers/school/SchoolSlice';

interface dialogProps {
    open: any;
    setOpen: any;
}

const studentsOfClass = [
    {id: 1, first: "Suzan", last: "Kassabry 1", studentId: "123456789", phone: "0537756044"},
    {id: 2, first: "Suzan", last: "Kassabry 2", studentId: "123456789", phone: "0537756044"},
    {id: 3, first: "Suzan", last: "Kassabry 3", studentId: "123456789", phone: "0537756044"},
    {id: 4, first: "Suzan", last: "Kassabry 4", studentId: "123456789", phone: "0537756044"},
    {id: 5, first: "Suzan", last: "Kassabry 5", studentId: "123456789", phone: "0537756044"},
    {id: 6, first: "Suzan", last: "Kassabry 6", studentId: "123456789", phone: "0537756044"},
    {id: 7, first: "Suzan", last: "Kassabry 7", studentId: "123456789", phone: "0537756044"},
    {id: 8, first: "Suzan", last: "Kassabry 8", studentId: "123456789", phone: "0537756044"},
    {id: 9, first: "Suzan", last: "Kassabry 9", studentId: "123456789", phone: "0537756044"},
    {id: 10, first: "Suzan", last: "Kassabry 10", studentId: "123456789", phone: "0537756044"}
]

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function NewCourseDialog(props: dialogProps) {
    const { open, setOpen } = props

    const students = useAppSelector(schoolStudents);
    const studentsOfClass = useAppSelector(classStudents);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function checkStudent(student:any) {
        let i;
        for (i = 0; i < studentsOfClass.length; i++) {
            if (studentsOfClass[i].id === student.id) {
                return true;
            }
        }
    
        return false;
    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>new Course</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        select/unselect student:
                    </DialogContentText>
                    <Autocomplete
                        multiple
                        id="checkboxes-tags-demo"
                        options={students}
                        disableCloseOnSelect
                        getOptionLabel={(option) => option.info.firstName.concat('', option.info.lastName)}
                        renderOption={(props, option, { selected }) => (
                            <li {...props}>
                                <Checkbox
                                    icon={icon}
                                    checkedIcon={checkedIcon}
                                    style={{ marginRight: 8 }}
                                    checked={checkStudent(option)}
                                />
                                {option.info.firstName.concat('', option.info.lastName)}
                            </li>
                        )}
                        style={{ width: 500 }}
                        renderInput={(params) => (
                            <TextField {...params} label="select or search students" placeholder="Favorites" />
                        )}
                        size="small"
                        className='inputField'
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>create</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
