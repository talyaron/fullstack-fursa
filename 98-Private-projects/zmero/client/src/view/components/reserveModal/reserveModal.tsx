import React, { useState } from 'react'
import Modal from '@mui/material/Modal';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DateFnsUtils from '@date-io/date-fns'
import Stack from '@mui/material/Stack';
import { AddReservation } from '../../../app/reducers/reservationsReducer';
import { useAppDispatch } from '../../../app/hooks';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { TextField } from '@mui/material';

interface details {
    restaurantID: string | undefined;
    openModal: any;
    setOpenModal: any;
}

function ReserveModal(props: details) {
    const dispatch = useAppDispatch()
    const [selectedDate, handleDateChange] = useState<Date | null>(new Date());
    const [people, SetPeople] = useState(1)
    const style = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 350,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    function handleReserve() {
        dispatch(AddReservation({
            restId: props.restaurantID,
            people: people,
            date: selectedDate,
        }))
        props.setOpenModal(false)
    }
    function handlePeople(event: any) {
        SetPeople(event.target.value);
    }
    return (
        <div>
            <Modal
                open={props.openModal}
                onClose={() => props.setOpenModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                onClick={(e: any) => (e.preventDefault())}
                disableScrollLock={true}
            >
                <Box sx={style} >
                    <Stack spacing={2}>
                        <Typography align="left" sx={{ mt: 1 }}>
                            <span style={{ fontWeight: 'bold' }}>Pick Up A Date</span>
                        </Typography>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Basic example"
                                value={selectedDate}
                                onChange={(newValue) => {
                                    handleDateChange(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <TimePicker
                                label="Basic example"
                                value={selectedDate}
                                onChange={(newValue) => {
                                    handleDateChange(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                        <FormControl fullWidth>
                            <InputLabel id="select-people">People</InputLabel>
                            <Select
                                labelId="select-people"
                                id="simple-select"
                                value={people}
                                label="people"
                                onChange={handlePeople}
                                MenuProps={{
                                    PaperProps: {
                                        style: {
                                            maxHeight: "10rem",
                                        },
                                    }
                                }}
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                            </Select>
                        </FormControl>
                        <Typography align="right" sx={{ mt: 3 }}>
                            <Button style={{ backgroundColor: '#2a945b', marginRight: '0.2rem' }} variant="contained" onClick={() => { props.setOpenModal(false) }}>Cancel</Button>
                            <Button style={{ backgroundColor: '#2a945b' }} variant="contained" onClick={handleReserve}>Confirm</Button>
                        </Typography>
                    </Stack>
                </Box>
            </Modal>
        </div >
    )
}
export default ReserveModal