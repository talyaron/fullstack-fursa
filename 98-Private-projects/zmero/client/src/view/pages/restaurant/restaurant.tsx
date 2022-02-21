import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import './restaurant.scss'
import Menu from '../../components/menu/menu'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

interface cardProp {
    id: number;
    name: string;
    image: string;
    booking: number;
    region: string;
    stars: number;
    category: string;
    photos: Array<string>;
}

function Restaurant() {
    const { RestaurantId } = useParams();
    const [Restaurant, setRestaurant] = useState<cardProp>({ id: 0, name: "", image: "", booking: 0, region: "", stars: 0, category: "", photos: [] })
    useEffect(() => {
        axios.get(`http://localhost:3004/Restaurants/${RestaurantId}`).then(({ data }) => {
            setRestaurant(data)
        }
        );
    }, []);

    //const imageArr = [{ url: 'https://www.w3schools.com/howto/img_nature_wide.jpg' }, { url: 'https://www.w3schools.com/howto/img_snow_wide.jpg' }]

    return (
        <div>
            <Menu></Menu>
            <div className="rest">
                <div className="rest__images">
                    <div className="rest__images__photo" style={{ backgroundImage: `url(${Restaurant.photos[0]})` }}></div>
                    <div className="rest__images__photo" style={{ backgroundImage: `url(${Restaurant.photos[1]})` }}></div>
                </div>
                <div className="rest__main">
                    <div className="rest__main__header">
                        <div className="rest__main__header__left">
                            <img src={Restaurant.image} alt="restaurant"></img>
                            <div className="rest__main__header__left__title">
                                <h1>{Restaurant.name}</h1>
                                <div className="rest__main__header__left__title__category">
                                    <span>{Restaurant.region}</span>
                                    <span className="dot"></span>
                                    <span>{Restaurant.category.toUpperCase()}</span>
                                </div>
                            </div>
                            <div className="rest__main__header__left__favorite">
                                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                            </div>
                        </div>
                        <div className="rest__main__header__right">
                            <Button style={{ backgroundColor: '#2a945b' }} fullWidth variant="contained">Reserve Now</Button>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Restaurant