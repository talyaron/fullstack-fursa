import './MainScreen.scss';
import Bagemenu from '../../components/menuBar/menu';
import background from '../../images/background.jpg';
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
import { getTopRecipesAsync, topRecipes } from '../../features/topRecipes/TopRecipes';
import { getRecentRecipesAsync, recentRecipes } from '../../features/recentRecipes/RecentRecipes';
import { updateName } from '../../features/pgaeName/NamePage';


export default function MainScreen() {
    //Redux
    const dispatch = useAppDispatch();
    const top10 = useAppSelector(topRecipes);
    const recent = useAppSelector(recentRecipes);

    useEffect(() => {
        dispatch(getTopRecipesAsync());
        dispatch(getRecentRecipesAsync());
        dispatch(updateName('/MainScreen'));
    }, []);

    async function imageClick(recipe:any, row:number){
        let from = '';
        let isNew_ = false;
        if(row == 1)
            from = 'top10'
        else from = 'recent'
        try {
            //axios.patch('http://localhost:3004/select/1', {recipe, from:from, isNew:false});
            axios.patch('/update-recipe', {recipe, from, isNew_});
        } catch (error) {
            console.error();
        }
        dispatch(updateRecipe(recipe));
        dispatch(updateFrom(from));
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
                                return(<SwiperSlide key={index} onClick={(ev:any) => imageClick(recipe, 1)}>
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
                                        <img src={recipe.image} alt='' onClick={() => imageClick(recipe, 2)}/>
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
