import React, { useEffect } from 'react';
import Navbar from '../../components/menu/menu';
import './favorite.scss'
import Footer from '../../components/footer/footer'
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { getFavorites, fetchUserFavorite } from '../../../app/reducers/favoriteReducer'
import { fetchAllRestaurants } from '../../../app/reducers/resterauntsReducer'
import Grid from '@mui/material/Grid';
import FavoriteCard from '../../components/favoriteCard/favoriteCard'

function Favorite() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchAllRestaurants())
        dispatch(fetchUserFavorite())
    }, []);
    const favorites = useAppSelector(getFavorites)
    return (
        <div>
            <Navbar></Navbar>
            <div className="main">
                <div className="main__content">
                    <header>
                        <h2>Your Latest Reservations</h2>
                    </header>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {favorites.map((r, index) => {
                            return (<Grid item xs={12} sm={4} md={3} key={index}>
                                <FavoriteCard key={index} id={r.id} restId={r.restId} />
                            </Grid>)
                        })}
                    </Grid>
                </div>

            </div>
            <Footer></Footer>
        </div>
    )
}
export default Favorite;