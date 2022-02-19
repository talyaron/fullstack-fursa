import React, { useState, useEffect } from 'react'
import Card from '../../components/restaurantCard/restaurantCard';
import Search from '../../components/search/search'
import Navbar from '../../components/menu/menu';
import Footer from '../../components/footer/footer';
import Location from './location.svg'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import './explore.scss'
interface cardProp {
    id: number;
    name: string;
    image: string;
    booking: number;
}



function Explore() {
    const [famousRestaurants, setFamousRestaurant] = useState([{ id: 0, name: "", image: "", booking: 0 }]);
    const [trendingRestaurants, setTrendingRestaurant] = useState([{ id: 0, name: "", image: "", booking: 0 }]);
    const [seaRestaurants, setSeaRestaurant] = useState([{ id: 0, name: "", image: "", booking: 0 }]);
    const [userRegion, setUserRegion] = useState('Israel');
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (e: any) => {
        setAnchorEl(null);
        console.log(e.target);
        setUserRegion(e.target.dataset.myValue)
    };
    useEffect(() => {
        fetch('/get-famous-restaurants')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setFamousRestaurant(data)
            })
            .catch((err) => {
                console.log(err)
            })
        fetch('/get-trending-restaurants')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTrendingRestaurant(data)
            })
            .catch((err) => {
                console.log(err)
            })
        fetch('/get-sea-restaurants')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSeaRestaurant(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);
    return (
        <div>
            <Navbar></Navbar>
            <Search></Search>
            <div className="exploremain">
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
                        {famousRestaurants.map((rest, index) => {
                            return <Card key={index} id={rest.id} name={rest.name} image={rest.image} booking={rest.booking}></Card>
                        })}
                    </div>
                </div>
                <div className="exploremain__popular">
                    <header>
                        <h2>Trending Restaurants in {userRegion}</h2>
                        <div className="exploremain__popular__view">View All</div>
                    </header>
                    <div className="exploremain__popular__grid">
                        {trendingRestaurants.map((rest, index) => {
                            return <Card key={index} id={rest.id} name={rest.name} image={rest.image} booking={rest.booking}></Card>
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
                            return <Card key={index} id={rest.id} name={rest.name} image={rest.image} booking={rest.booking}></Card>
                        })}
                    </div>
                </div>
                <div className="exploremain__restaurateurs">
                    <div className="exploremain__restaurateurs__background">
                        <div className="exploremain__restaurateurs__background__color"></div>
                        <h2>Restaurateurs Join Us</h2>
                        <h3> Join More Than XXX Restaurants which fill seats and manage reservations</h3>
                        <button className="exploremain__restaurateurs__background__btn">Learn More</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Explore