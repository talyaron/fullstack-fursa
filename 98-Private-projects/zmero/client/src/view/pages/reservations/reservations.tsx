import React, { useState, useEffect } from 'react';
import Navbar from '../../components/menu/menu';
import Footer from '../../components/footer/footer'
import ReservationCard from '../../components/reservationCard/reservationCard'
import './reservations.scss'
import axios from 'axios'
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { fetchUserReservations, getUserReservations } from '../../../app/reducers/reservationsReducer'
import { fetchAllRestaurants } from '../../../app/reducers/resterauntsReducer'

function Reservations() {
    const dispatch = useAppDispatch()
    useEffect(() => {
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
                    <div className="main__content__card">
                        {reservations.map((r, index) => {
                            return <ReservationCard key={index} restID={r.restID} id={r.id} hour={r.hour} min={r.min} year={r.year} month={r.month} day={r.day}></ReservationCard>
                        })}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Reservations;