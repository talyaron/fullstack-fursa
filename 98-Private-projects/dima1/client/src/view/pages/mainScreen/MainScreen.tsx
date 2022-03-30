import './MainScreen.scss';
import Bagemenu from '../../components/menuBar/menu';
import background from '../../images/background.jpg';
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getSelectAsync } from '../../../app/reducers/itemSlice';
import { getTopRecipesAsync, topRecipes } from '../../../app/reducers/TopRecipesSlice';
import { getRecentRecipesAsync, recentRecipes } from '../../../app/reducers/RecentRecipesSlice';
import { updateName } from '../../../app/reducers/NamePageSlice';
import { getUserAsync, user } from '../../../app/reducers/userReducer';
import { allRecipes, getAllRecipes, RecipeState } from '../../../app/reducers/recipesReducer';


export default function MainScreen() {
    //Redux
    const { userName } = useParams();
    const dispatch = useAppDispatch();
    const user_ = useAppSelector(user);
    const allRecipes_ = useAppSelector(allRecipes);

    useEffect(() => {
        dispatch(getUserAsync(userName));
        dispatch(getAllRecipes());
        filterTopRecipes();
        filterRecentRecipes();
    }, []);

    function imageClick(recipe:any){
        try {
            dispatch(getSelectAsync({name : recipe.name}))
        } catch (error) {
            console.error();
        }
    }
    
    function filterTopRecipes() : Array<RecipeState>{
        const sorted:Array<RecipeState> = Object.assign([], allRecipes_);
        sorted.sort((recipe1:RecipeState, recipe2:RecipeState) => {
            return recipe2.likes - recipe1.likes;
        })
        if(sorted.length < 10)
            return sorted;
        else {
            return sorted.slice(0,10);
        }
    }

    function filterRecentRecipes(){
        const sorted:Array<RecipeState> = Object.assign([], allRecipes_);
        sorted.sort((recipe1:RecipeState, recipe2:RecipeState) => {
            return new Date(recipe2.date).getTime() - new Date(recipe1.date).getTime();
        })
        if(sorted.length < 10)
            return sorted;
        else {
            return sorted.slice(0,10);
        }
    }

    return (
        <div className="wrapper">
            <div className='menuBar' id="outer-container">
                <Bagemenu userName={userName}/>
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
                            loop={false}
                            loopFillGroupWithBlank={false}
                            pagination={{
                                clickable: true
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {filterTopRecipes().map((recipe:any, index:number) => {
                                return(<SwiperSlide key={index} onClick={() => imageClick(recipe)}>
                                    <Link to={`/${user_.name}/${recipe._id}`}>
                                        <img src={recipe.image} alt=''/>
                                    </Link>
                                    <p>{recipe.name}</p>
                                </SwiperSlide>);
                            })}
                        </Swiper>
                    </div>
                    <h1 className='title1'>Most Recent Recipes</h1>
                    <div className='content1'>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={20}
                            slidesPerGroup={1}
                            loop={false}
                            loopFillGroupWithBlank={false}
                            pagination={{
                                clickable: true
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {filterRecentRecipes().map((recipe:any, index:number) => {
                                return(
                                    <SwiperSlide key={index}  onClick={(ev:any) => imageClick(recipe)}>
                                        <Link to={`/${user_.name}/${recipe._id}`}>
                                            <img src={recipe.image} alt=''/>
                                        </Link>
                                        <p>{recipe.name}</p>
                                    </SwiperSlide>
                                );
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
