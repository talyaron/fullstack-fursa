import './MainScreen.scss';
import Bagemenu from '../../components/menuBar/menu';
import background from '../../background.jpg';
import img1 from '../../1.jpg';
import img2 from '../../2.jpg';
import img3 from '../../3.jpg';
import img4 from '../../4.jpg';
import img5 from '../../5.jpg';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function MainScreen() {
    return (
        <div className="wrapper">
            <div className='menuBar'>
                <Bagemenu />
            </div>
            <div className='contentBox'>
                <img className='image' src={background} alt="" />
                <div className='content'>
                    <h1 className='title1'>Top 10 Recipes</h1>
                    <div className='content1'>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            slidesPerGroup={1}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                                clickable: true
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src={img1} alt='' />
                                <p>Recipes 1</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img2} alt='' />
                                <p>Recipes 2</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img3} alt='' />
                                <p>Recipes 3</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img4} alt='' />
                                <p>Recipes 4</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img5} alt='' />
                                <p>Recipes 5</p>
                            </SwiperSlide>
                            <SwiperSlide>Slide 6</SwiperSlide>
                            <SwiperSlide>Slide 7</SwiperSlide>
                            <SwiperSlide>Slide 8</SwiperSlide>
                            <SwiperSlide>Slide 9</SwiperSlide>
                            <SwiperSlide>Slide 10</SwiperSlide>
                        </Swiper>
                    </div>
                    <h1 className='title1'>The Newest Recipes</h1>
                    <div className='content1'>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            slidesPerGroup={1}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                                clickable: true
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src={img1} alt='' />
                                <p>Recipes 1</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img2} alt='' />
                                <p>Recipes 2</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img3} alt='' />
                                <p>Recipes 3</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img4} alt='' />
                                <p>Recipes 4</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img5} alt='' />
                                <p>Recipes 5</p>
                            </SwiperSlide>
                            <SwiperSlide>Slide 6</SwiperSlide>
                            <SwiperSlide>Slide 7</SwiperSlide>
                            <SwiperSlide>Slide 8</SwiperSlide>
                            <SwiperSlide>Slide 9</SwiperSlide>
                            <SwiperSlide>Slide 10</SwiperSlide>
                        </Swiper>
                    </div>
                    <br />
                    <br />
                </div>
            </div>
        </div>
    );
}