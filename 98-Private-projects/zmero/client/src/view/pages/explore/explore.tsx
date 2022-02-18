import React, { useState, useEffect } from 'react'
import Card from '../../components/restaurantCard/restaurantCard';
import Search from '../../components/search/search'
import Navbar from '../../components/menu/menu';
import Location from './location.svg'

import './explore.scss'
interface cardProp {
    id: number;
    name: string;
    image: string;
    booking: number;
}



function Explore() {
    const [famousRestaurants, setFamousRestaurant] = useState([{ id: 0, name: "", image: "", booking: 0 }]);
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
    }, []);
    return (
        <div>
            <Navbar></Navbar>
            <Search></Search>
            <div className="exploremain">
                <div className="exploremain__location">
                    <h5>It looks like you're in Israel. Not Correct?</h5>
                    <div className="exploremain__location__get">
                        <img src={Location}></img>
                        <h5>Get current location</h5>
                    </div>
                </div>
                <div className="exploremain__popular">
                    <header>
                        <h2>Popular Restaurants in Israel</h2>
                        <div className="exploremain__popular__view">View All</div>
                    </header>
                    <div className="exploremain__popular__grid">
                        {famousRestaurants.map((rest, index) => {
                            return <Card key={index} id={rest.id} name={rest.name} image={rest.image} booking={rest.booking}></Card>
                        })}
                    </div>
                </div>
                <div className="exploremain__restaurateurs">
                    <div className="exploremain__restaurateurs__background">
                        <div className="exploremain__restaurateurs__background__color"></div>
                        <h2>Restaurateurs Join Us</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Explore