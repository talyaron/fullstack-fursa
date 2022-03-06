import React, { useState, useEffect } from 'react'
import Card from '../../components/restaurantCard/restaurantCard';
import Search from '../../components/search/search'
import Navbar from '../../components/menu/menu';
import Footer from '../../components/footer/footer';
import Location from './location.svg'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { getFamousRestaurants, fetchFamousRestaurants, getRegions, fetchRegion } from '../../../app/reducers/resterauntsReducer'

import './explore.scss'
import Grid from '@mui/material/Grid';

function Explore() {
    const dispatch = useAppDispatch()
    const famousRestaurants = useAppSelector(getFamousRestaurants)
    const arrOfRegions = useAppSelector(getRegions)
    const [trendingRestaurants, setTrendingRestaurant] = useState([{ id: "0", name: "", image: "", booking: 0, region: "", stars: 0, city: "" }]);
    const [seaRestaurants, setSeaRestaurant] = useState([{ id: "0", name: "", image: "", booking: 0, region: "", stars: 0, city: "" }]);
    const [userRegion, setUserRegion] = useState('Israel');
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    useEffect(() => {
        dispatch(fetchFamousRestaurants(userRegion))
        dispatch(fetchRegion())
    }, []);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (e: any) => {
        setAnchorEl(null);
        if (Object.keys(e.currentTarget.dataset).length != 0) {
            setUserRegion(e.target.dataset.myValue)
            const newRegion = e.target.dataset.myValue
            dispatch(fetchFamousRestaurants(newRegion))
        }
    };
    const pictureOfRegion = arrOfRegions.filter((e) => {
        if (e.region === userRegion)
            return e
    })
    let img = ""
    if (pictureOfRegion.length > 0)
        img = pictureOfRegion[0].url
    return (
        <div>
            <Navbar></Navbar>
            <div className="exploremain">
                <div className="exploremain__region" style={{ backgroundImage: `url(${img})` }}>
                    <div className="exploremain__region__title">Reserve at the best restaurants in {userRegion}</div></div>
                <div className="exploremain__location">
                    <h5>It looks like you're in {userRegion}. Not Correct?</h5>
                    <div className="exploremain__location__get">
                        <img src={Location}></img>
                        <div>
                            <Button
                                id="basic-button"
                                style={{ color: "#2a945b" }}
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                Get Current Location
                            </Button>
                            <Menu
                                id="basic-menu"
                                PaperProps={{
                                    style: { width: "12rem" }
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem data-my-value='Israel' onClick={handleClose}>Israel</MenuItem>
                                <MenuItem data-my-value='UK' onClick={handleClose}>UK</MenuItem>
                                <MenuItem data-my-value='USA' onClick={handleClose}>USA</MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>
                <div className="exploremain__popular">
                    <header>
                        <h2>Popular Restaurants in {userRegion}</h2>
                        <div className="exploremain__popular__view">View All</div>
                    </header>
                    <div className="exploremain__popular__grid">
                        <Grid container spacing={{ xs: 2, md: 3 }}>
                            {famousRestaurants.slice(0, 4).map((rest, index) => {
                                return (<Grid item xs={12} sm={6} md={3} key={index}>
                                    <Card key={index} id={rest.id} name={rest.name} image={rest.image} booking={rest.booking} stars={rest.stars} region={rest.region} city={rest.city}></Card>
                                </Grid>)
                            })}
                        </Grid>
                    </div>
                </div>
                <div className="exploremain__popular">
                    <header>
                        <h2>Trending Restaurants in {userRegion}</h2>
                        <div className="exploremain__popular__view">View All</div>
                    </header>
                    <div className="exploremain__popular__grid">
                        {trendingRestaurants.map((rest, index) => {
                            return <Card key={index} id={rest.id} name={rest.name} image={rest.image} booking={rest.booking} stars={rest.stars} region={rest.region} city={rest.city}></Card>
                        })}
                    </div>
                </div>
                <div className="exploremain__popular">
                    <header>
                        <h2>SeaFood Restaurants in {userRegion}</h2>
                        <div className="exploremain__popular__view">View All</div>
                    </header>
                    <div className="exploremain__popular__grid">
                        {seaRestaurants.map((rest, index) => {
                            return <Card key={index} id={rest.id} name={rest.name} image={rest.image} booking={rest.booking} stars={rest.stars} region={rest.region} city={rest.city}></Card>
                        })}
                    </div>
                </div>
                <div className="exploremain__restaurateurs">
                    <div className="exploremain__restaurateurs__background">
                        <div className="exploremain__restaurateurs__background__color"></div>
                        <h2>Restaurateurs Join Us</h2>
                        <h3> Join More Than X Restaurants which fill seats and manage reservations</h3>
                        <button className="exploremain__restaurateurs__background__btn">Learn More</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Explore