import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import './restaurant.scss'
import Menu from '../../components/menu/menu'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ReserveModal from '../../components/reserveModal/reserveModal'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';

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
    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = 2;
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: any) => {
        setActiveStep(step);
    };

    const { RestaurantId } = useParams();
    const [openModal, setOpenModal] = useState(false);
    const [openPhoto, setOpenPhoto] = useState(false);
    const [Restaurant, setRestaurant] = useState<cardProp>({ id: 0, name: "", image: "", booking: 0, region: "", stars: 0, category: "", photos: [] })
    function openReserve(e: any) {
        e.preventDefault();
        setOpenModal(true);
    }
    useEffect(() => {
        axios.get(`http://localhost:3004/Restaurants/${RestaurantId}`).then(({ data }) => {
            setRestaurant(data)
        }
        );
    }, []);

    const images = [{ url: 'https://www.w3schools.com/howto/img_nature_wide.jpg' }, { url: 'https://www.w3schools.com/howto/img_snow_wide.jpg' }]
    function photoSlider() {
        setOpenPhoto(true);
    }

    return (
        <div>
            <Menu></Menu>
            <div className="rest">
                <div className="rest__images" onClick={photoSlider}>
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
                            <Button style={{ backgroundColor: '#2a945b' }} fullWidth variant="contained" onClick={openReserve}>Reserve Now</Button>
                        </div>
                    </div>
                </div>

            </div >
            <ReserveModal restaurantID={Number(RestaurantId)} openModal={openModal} setOpenModal={setOpenModal} />
            <Modal
                open={openPhoto}
                onClose={() => setOpenPhoto(false)}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{
                    top: '50%', left: '50%', position: 'absolute', transform: 'translate(-50%, -50%)', Width: "50%", maxHeight: "300",
                }}>
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {Restaurant.photos.map((step, index) => (
                            <div key={index}>
                                {Math.abs(activeStep - index) <= 2 ? (
                                    <Box
                                        component="img"
                                        sx={{
                                            height: "450px",
                                            width: "100%",
                                            maxHeight: "700px",
                                            display: "block"
                                        }}
                                        src={step}

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
        </div >
    )
}

export default Restaurant