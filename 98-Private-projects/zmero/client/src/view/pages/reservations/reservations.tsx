import React, { useState, useEffect } from 'react';
import Navbar from '../../components/menu/menu';
import Footer from '../../components/footer/footer'
import ReservationCard from '../../components/reservationCard/reservationCard'
import './reservations.scss'
import axios from 'axios'

interface cardProp {
    id: number;
    hour: number;
    min: number;
    year: number;
    month: number;
    day: number;
    restID: number;
}


function Reservations() {
    const [reser, setReser] = useState([{ restID: 0, id: 0, hour: 0, min: 0, year: 0, month: 0, day: 0 }])
    const [rest, setRest] = useState([{ restID: 0, id: 0, hour: 0, min: 0, year: 0, month: 0, day: 0 }])
    useEffect(() => {
        axios.get('http://localhost:3004/Reservations').then(({ data }) => { setReser(data) });
        axios.get('http://localhost:3004/Restaurants').then(({ data }) => {
            setRest(data)
        });
    }, []);
    return (
        <div>
            <Navbar></Navbar>
            <div className="main">
                <div className="main__content">
                    <header>
                        <h2>Your Latest Reservations</h2>
                    </header>
                    <div className="main__content__card">
                        {reser.map((r, index) => {
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