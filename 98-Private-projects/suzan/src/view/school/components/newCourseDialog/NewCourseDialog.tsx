import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Autocomplete from '@mui/material/Autocomplete';

interface dialogProps {
    open: any;
    setOpen: any;
}

const teachers = [
    { label: 'Suzan Kassabry' },
    { label: 'Lama Bisharat' },
    { label: 'Rania Ateek' },
    { label: 'Suzan Kassabry 2' },
    { label: 'Lama Bisharat 2' },
    { label: 'Rania Ateek 2' }
]

export default function NewCourseDialog(props: dialogProps) {
    const { open, setOpen } = props

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
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="search or select teacher" />}
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
