import React, { useState } from 'react'
import Modal from '@mui/material/Modal';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TimePicker from '@mui/lab/TimePicker';
import DatePicker from '@mui/lab/DatePicker';
import Button from '@mui/material/Button';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import TextField from '@mui/material/TextField/TextField';
import Stack from '@mui/material/Stack';

interface details {
    restaurantID: number;
    openModal: any;
    setOpenModal: any;
}

function ReserveModal(props: details) {
    const [reserveDate, setReserveDate] = React.useState<Date | null>(new Date());
    const [reserveTime, setReserveTime] = useState<number | null>(new Date().getTime())
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    function openReserve(e: any) {
        e.preventDefault();
        props.setOpenModal(true);
    }
    function handleReserve() {
        console.log(props.restaurantID)
    }
    return (
        <div>
            <Modal
                open={props.openModal}
                onClose={() => props.setOpenModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                onClick={(e: any) => (e.preventDefault())}
            >
                <Box sx={style} >
                    <Stack spacing={2}>
                        <Typography align="left" sx={{ mt: 1 }}>
                            <span style={{ fontWeight: 'bold' }}>Pick Up A Date</span>
                        </Typography>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Date"
                                value={reserveDate}
                                onChange={(newValue) => {
                                    setReserveDate(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <TimePicker
                                label="Time"
                                value={reserveTime}
                                onChange={(newValue) => {
                                    setReserveTime(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                        <Typography align="right" sx={{ mt: 3 }}>
                            <Button style={{ backgroundColor: '#2a945b' }} variant="contained" onClick={handleReserve}>Confirm</Button>
                        </Typography>
                    </Stack>
                </Box>
            </Modal>
        </div>
    )
}
export default ReserveModal