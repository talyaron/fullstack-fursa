import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from 'axios';
import { useAppSelector } from '../../../../app/hooks';
import { selectedCourseName } from '../../../../app/reducers/teacher/CourseCardSlice';

interface dialogProps {
    open: any;
    setOpen: any;
}

export default function NewHomeworkDialog(props: dialogProps) {
    const { open, setOpen } = props
    const [homework, setHomework] = useState("");
    const courseName = useAppSelector(selectedCourseName);

    const handleClose = () => {
        setOpen(false);
    };

    function handleHomework(ev:any){
        // console.log(ev.target.value)
        setHomework(ev.target.value);
    }

    function handleAdd(){
        if(homework !== "") {
            axios.post('http://localhost:3004/homeworks', { 'course': courseName, 'description': homework })
            .then(({ data }) => console.log(data));
        }
        handleClose();
    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose} fullWidth={true}>
                <DialogTitle>new homework</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        insert homework bellow:
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="normal"
                        id="name"
                        label="homework"
                        type="text"
                        variant="standard"
                        required
                        fullWidth
                        multiline
                        rows={2}
                        onKeyUp={handleHomework}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleAdd}>add</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}