import React from 'react';
import Swiper from 'swiper';
import Bagemenu from '../../components/menuBar/menu';
import background from '../../images/background.jpg';
import './Test.scss';
//import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

interface item {
    name: String;
    status: Boolean;
}

function Test() {

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 3
    // }

    // const types: Array<item> = [{ name: 'Food', status: false }, { name: 'Desserts', status: false }]

    // function handleClick(event: any, index: number) {
    //     if (types[index].status)
    //         event.target.style.backgroundColor = "red";
    //     else event.target.style.backgroundColor = "white";
    //     types[index].status = !types[index].status;
    // }


    return (
        <div className='test'>
            {/* <div className='wrapper'>
                Extra firm tofu works best for stir-fry.
                The curd is pressed for longer when manufacturing,
                which yields a more compact soy protein product.

                It’s still soft but it doesn’t crumble with gentle pressure.
                This prevents the tofu from falling apart as it fries in the hot oil and makes it easier to flip.
                When added back to the pan to toss with the sauce, the protein keeps its cube shape.
            </div> */}
        </div>

    );

}

export default Test;