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

interface dialogProps {
    open: any;
    setOpen: any;
}

const students = [
    {name: 'Suzan Kassabry 1'}, {name: 'Suzan Kassabry 2'}, {name: 'Suzan Kassabry 3'}, {name: 'Suzan Kassabry 4'},
    {name: 'Suzan Kassabry 5'}, {name: 'Suzan Kassabry 6'}, {name: 'Suzan Kassabry 7'}, {name: 'Suzan Kassabry 8'}
]

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function NewCourseDialog(props: dialogProps) {
    const { open, setOpen } = props

    const students = useAppSelector(classStudents);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                        getOptionLabel={(option) => option.first.concat('', option.last)}
                        renderOption={(props, option, { selected }) => (
                            <li {...props}>
                                <Checkbox
                                    icon={icon}
                                    checkedIcon={checkedIcon}
                                    style={{ marginRight: 8 }}
                                    checked={selected}
                                />
                                {option.first.concat('', option.last)}
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
