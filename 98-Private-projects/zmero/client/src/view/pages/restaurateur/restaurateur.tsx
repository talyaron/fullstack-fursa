import React, { useEffect } from 'react'
import Menu from '../../components/menu/menu'
import './restaurateur.scss'
import Card from '../../components/ownerCard/ownerCard'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import { fetchAllOwnerRestaurants, getAllRestaurants, getOwnerReserveData, getOwnerRestaurants } from '../../../app/reducers/resterauntsReducer'
import Grid from '@mui/material/Grid'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer/footer'


function Restaurateur() {
    const ownerRestaurants = useAppSelector(getOwnerRestaurants)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (ownerRestaurants.length === 0)
            dispatch(fetchAllOwnerRestaurants())
    }, [])

    return (
        <div className="restaurateur">
            <Menu></Menu>
            <div className="restaurateur__main">
                <div className="restaurateur__main__owner">
                    <div className="restaurateur__main__owner__title">
                        Choose A Resteruant To Display
                    </div>
                    <div className="restaurateur__main__owner__cards">
                        <Grid container spacing={{ xs: 2, md: 3 }}>
                            {ownerRestaurants.map((rest, index) => {
                                return (<Grid item xs={12} sm={6} md={3} key={index}>
                                    <Card key={index} id={rest.id} name={rest.name} image={rest.image} booking={rest.booking} stars={rest.stars} region={rest.region} city={rest.city}></Card>
                                </Grid>)
                            })}
                        </Grid>
                    </div>
                </div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Restaurateur