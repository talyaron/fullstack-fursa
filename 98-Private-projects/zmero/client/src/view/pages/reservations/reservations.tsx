import React, { useEffect } from 'react';
import Navbar from '../../components/menu/menu';
import Footer from '../../components/footer/footer'
import ReservationCard from '../../components/reservationCard/reservationCard'
import { useNavigate } from 'react-router-dom'
import './reservations.scss'
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { fetchUserReservations, getUserReservations } from '../../../app/reducers/reservationsReducer'
import { fetchAllRestaurants } from '../../../app/reducers/resterauntsReducer'
import Grid from '@mui/material/Grid';
import { checkUser } from '../../../app/reducers/userReducer'


function Reservations() {
    const dispatch = useAppDispatch()
    const ifUserLogIn = useAppSelector(checkUser)
    const navigate = useNavigate()
    useEffect(() => {
        if (ifUserLogIn == false)
            navigate('/')
        dispatch(fetchUserReservations())
        dispatch(fetchAllRestaurants())
    }, []);
    const reservations = useAppSelector(getUserReservations)
    return (
        <div>
            <Navbar></Navbar>
            <div className="main">
                <div className="main__content">
                    <header>
                        <h2>Your Latest Reservations</h2>
                    </header>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {reservations.map((r, index) => {
                            return (<Grid item xs={12} sm={4} md={3} key={index}>
                                <ReservationCard key={r._id} restId={r.restId} id={r._id} date={r.date} people={r.people}></ReservationCard>
                            </Grid>)
                        })}
                    </Grid>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Reservations;