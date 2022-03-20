import React from 'react';
import Swiper from 'swiper';
import Bagemenu from '../../components/menuBar/menu';
import background from '../../images/background.jpg';
import './Test.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface item {
    name: String;
    status: Boolean;
}

function Test() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    }

    const types: Array<item> = [{ name: 'Food', status: false }, { name: 'Desserts', status: false }]

    function handleClick(event: any, index: number) {
        if (types[index].status)
            event.target.style.backgroundColor = "red";
        else event.target.style.backgroundColor = "white";
        types[index].status = !types[index].status;
    }


    return (
        <div className='wrapper'>
            <Bagemenu userName={'dima'} />
            <div className='content'>
                <img className='image' src={background} />
                <div className='content1'>
                    {types.map((type, index) => {
                        return (
                            <button key={index} onClick={(ev) => handleClick(ev, index)}>{type.name}</button>
                        )
                    })}
                </div>
            </div>
            <Slider {...settings}>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
            </Slider>
        </div>
    );

}

export default Test;