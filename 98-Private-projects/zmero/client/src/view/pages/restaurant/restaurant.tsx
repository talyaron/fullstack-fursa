import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './restaurant.scss'
import Menu from '../../components/menu/menu'
import Footer from '../../components/footer/footer'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ReserveModal from '../../components/reserveModal/reserveModal'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import { getAllRestaurants, fetchAllRestaurants } from '../../../app/reducers/resterauntsReducer'
import { addFavorite, fetchUserFavorite, deleteFavorite, getFavorites } from '../../../app/reducers/favoriteReducer'
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import Chip from '@mui/material/Chip';
import Map from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import ScrollIntoView from "../../components/ScrollIntoView/ScrollIntoView";
import { selectUserId } from '../../../app/reducers/userReducer';



function Restaurant() {
    const dispatch = useAppDispatch()
    const userId = useAppSelector(selectUserId)
    useEffect(() => {
        dispatch(fetchAllRestaurants())
        dispatch(fetchUserFavorite(userId))
    }, []);
    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = 2;
    const [Restaurant, setRestaurant] = useState({ id: "0", name: "", image: "", booking: 0, region: "", stars: 0, category: "", photos: [], city: "", open: "", close: "", description: "", subCategory: [] })
    const { RestaurantId } = useParams();
    const [openModal, setOpenModal] = useState(false);
    const [openPhoto, setOpenPhoto] = useState(false);
    const restaurants = useAppSelector(getAllRestaurants)
    const favorites = useAppSelector(getFavorites)
    const [checked, setChecked] = React.useState(false);
    let restaurant = restaurants.filter((rest) => {
        if (rest.id == RestaurantId)
            return rest
    })
    const favorite = favorites.filter((fav) => {
        if (fav.restId == RestaurantId)
            return fav
    })
    if (restaurant.length == 0)
        restaurant = [Restaurant];
    if (favorite.length > 0 && checked === false) {
        setChecked(true)
    }
    if (favorite.length == 0 && checked === true) {
        setChecked(false)
    }
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: any) => {
        setActiveStep(step);
    };
    function isFavorite(e: any) {
        if (e.target.checked) {
            dispatch(addFavorite({ "userId": userId, 'restId': RestaurantId }))
        }
        else {
            dispatch(deleteFavorite({ "restId": RestaurantId, "userId": userId }))
            setChecked(false)
        }

    }
    function openReserve(e: any) {
        e.preventDefault();
        setOpenModal(true);
    }
    function photoSlider() {
        setOpenPhoto(true);
    }
    return (
        <ScrollIntoView>
            <div>
                <Menu></Menu>
                <div className="rest">
                    <div className="rest__images" onClick={photoSlider}>
                        <div className="rest__images__photo" style={{ backgroundImage: `url(${restaurant[0].photos[0]})` }}></div>
                        <div className="rest__images__photo" style={{ backgroundImage: `url(${restaurant[0].photos[1]})` }}></div>
                    </div>
                    <div className="rest__main">
                        <div className="rest__main__header">
                            <div className="rest__main__header__left">
                                <img src={restaurant[0].image} alt="restaurant"></img>
                                <div className="rest__main__header__left__title">
                                    <h1>{restaurant[0].name}</h1>
                                    <div className="rest__main__header__left__title__category">
                                        <span>{restaurant[0].region}</span>
                                        <span className="dot"></span>
                                        <span>{restaurant[0].city}</span>
                                        <span className="dot"></span>
                                        <span>{restaurant[0].category.toUpperCase()}</span>
                                    </div>
                                </div>
                                <div className="rest__main__header__left__favorite">
                                    <Checkbox checked={checked} icon={<FavoriteBorder />} checkedIcon={<Favorite />} onClick={isFavorite} />
                                </div>
                            </div>
                            <div className="rest__main__header__right">
                                <Button style={{ backgroundColor: '#2a945b' }} fullWidth variant="contained" onClick={openReserve}>Check Availability</Button>
                                <div className="rest__main__header__right__openings">
                                    <h3>Hours</h3>
                                    <h4>Sunday-Friday</h4>
                                    <span>{restaurant[0].open}-{restaurant[0].close}</span>
                                </div>
                            </div>
                        </div>
                        <div className="rest__main__body">
                            <div className="rest__main__body__description">
                                <h2>Description</h2>
                                <span>{restaurant[0].description}</span>
                                <div className="rest__main__body__description__sub">
                                    {restaurant[0].subCategory.map((s: string, index) => {
                                        return <Chip key={index} label={s} style={{ marginRight: "0.4rem" }} />
                                    })}
                                </div>
                            </div>
                            <div className="rest__main__body__location">
                                <h2>Location</h2>
                                <Map mapLib={maplibregl} initialViewState={{
                                    longitude: -122.4,
                                    latitude: 37.8,
                                    zoom: 1
                                }}
                                    style={{ width: 600, height: 400 }}
                                    mapStyle="https://demotiles.maplibre.org/style.json"
                                />
                            </div>
                        </div>
                    </div>

                </div >
                <ReserveModal restaurantID={RestaurantId} openModal={openModal} setOpenModal={setOpenModal} />
                <Modal
                    open={openPhoto}
                    onClose={() => setOpenPhoto(false)}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >
                    <Box sx={{
                        display: "flex", flexDirection: "column", width: "50%", justifyContent: "center", margin: "auto", position: "absolute", top: "25%", left: "25%"
                    }}>
                        <AutoPlaySwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={activeStep}
                            onChangeIndex={handleStepChange}
                            enableMouseEvents
                        >
                            {restaurant[0].photos.map((step, index) => (
                                <div key={index}>
                                    {Math.abs(activeStep - index) <= restaurant[0].photos.length ? (
                                        <Box

                                            sx={{
                                                backgroundImage: `url(${step})`,
                                                height: "400px",
                                                width: "100%",
                                                maxHeight: "700px",
                                                backgroundPosition: "50%",
                                                backgroundSize: "cover",

                                            }}


                                        />
                                    ) : null}
                                </div>
                            ))}
                        </AutoPlaySwipeableViews>
                        <MobileStepper
                            steps={maxSteps}
                            position="static"
                            activeStep={activeStep}
                            nextButton={
                                <Button
                                    size="small"
                                    onClick={handleNext}
                                    disabled={activeStep === maxSteps - 1}
                                >
                                    Next
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowLeft />
                                    ) : (
                                            <KeyboardArrowRight />
                                        )}
                                </Button>
                            }
                            backButton={
                                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowRight />
                                    ) : (
                                            <KeyboardArrowLeft />
                                        )}
                                Back
                            </Button>
                            }
                        />
                    </Box>
                </Modal>
                <Footer />
            </div >
        </ScrollIntoView>
    )
}

export default Restaurant