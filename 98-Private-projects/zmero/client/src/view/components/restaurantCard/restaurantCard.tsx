import React, { useState, useEffect } from 'react'
import Logo from './raise.svg'
import './restaurantCard.scss'
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';
import Button from '@mui/material/Button';
interface cardProp {
    id: number;
    name: string;
    image: string;
    booking: number;
    region: string;
    stars: number;
}


function RestaurantCard(prop: cardProp) {
    const [openModal, setOpenModal] = useState(false);
    const [reserveDate, setReserveDate] = React.useState<Date | null>(new Date());
    const [reserveTime, setReserveTime] = useState<number | null>(0)
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
        setOpenModal(true);

    }
    return (
        <Link to={`/Restaurant/${prop.id}`}>
            <div className="restaurantCard">
                <img src={prop.image}></img>
                <div className="restaurantCard__title">
                    <h3>{prop.name}</h3>
                </div>
                <div>
                    <Rating style={{ color: '#931b23' }} name="read-only" value={prop.stars} readOnly />
                </div>
                <div className="restaurantCard__booking">
                    <img src={Logo} ></img>
                    <div className="restaurantCard__booking__title">
                        Booked {prop.booking} times today!
                </div>
                </div>
                <div className="restaurantCard__reserve">
                    <button className="restaurantCard__reserve__btn" onClick={openReserve}>Find next availabe</button>
                </div>
                <Modal
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    onClick={(e: any) => (e.preventDefault())}
                >
                    <Box sx={style} >
                        <Typography variant="h6" component="h2">
                            Pick Up a Date
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
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
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
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
                        </Typography>
                        <Typography align="right" sx={{ mt: 3 }}>
                            <Button style={{ backgroundColor: '#2a945b' }} variant="contained">Reserve Now</Button>
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </Link >
    )
}
export default RestaurantCard;