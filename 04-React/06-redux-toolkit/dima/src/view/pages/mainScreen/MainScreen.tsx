import './MainScreen.scss';
import Bagemenu from '../../components/menuBar/menu';
import background from '../../images/background.jpg';
import RecipeInfo from '../recipeInfo/RecipeInfo';
import img1 from '../../images/1.jpg';
import img2 from '../../images/2.jpg';
import img3 from '../../images/3.jpg';
import img4 from '../../images/4.jpg';
import img5 from '../../images/5.jpg';
import React, { useEffect, useState } from "react";
import axios from 'axios';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { updateRecipe, updateFrom } from '../../features/item/itemSlice';
import { getRecipesAsync, recentRecipes, top10Recipes } from '../../features/recipes/RecipesArray';


export default function MainScreen() {
    //Redux
    const dispatch = useAppDispatch();
    const top10 = useAppSelector(top10Recipes);
    const recent = useAppSelector(recentRecipes);

    useEffect(() => {
        dispatch(getRecipesAsync());
    }, []);

    const imageClick1 = (ev:any, recipe:any) => {
        dispatch(updateRecipe(recipe));
        dispatch(updateFrom('top10'));
    } 

    const imageClick2 = (recipe:any) => {
        dispatch(updateRecipe(recipe));
        dispatch(updateFrom('recent'));
    } 

    return (
        <div className="wrapper">
            <div className='menuBar' id="outer-container">
                <Bagemenu />
            </div>
            <div className='contentBox' id="page-wrap">
                <img className='image' src={background} alt="" />
                <div className='content'>
                    <h1 className='title1'>Top 10 Recipes</h1>
                    <div className='content1'>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={20}
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
                            {top10.map((recipe:any, index:number) => {
                                return(<SwiperSlide key={index} onClick={(ev:any) => imageClick1(ev,recipe)}>
                                    <Link to='/RecipeInfo'>
                                        <img src={recipe.image} alt=''/>
                                    </Link>
                                    <p>{recipe.name}</p>
                                </SwiperSlide>);
                            })}
                        </Swiper>
                    </div>
                    <h1 className='title1'>Most Recent Recipe</h1>
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
                            {recent.map((recipe:any, index:number) => {
                                return(<SwiperSlide key={index}>
                                    <Link to='/RecipeInfo'>
                                        <img src={recipe.image} alt='' onClick={() => imageClick2(recipe)}/>
                                    </Link>
                                    <p>{recipe.name}</p>
                                </SwiperSlide>);
                            })}
                        </Swiper>
                    </div>
                    <br />
                    <br />
                </div>
            </div>
        </div>
    );
}