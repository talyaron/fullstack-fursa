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
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getSelectAsync } from '../../../app/reducers/itemSlice';
import { getTopRecipesAsync, topRecipes } from '../../../app/reducers/TopRecipesSlice';
import { getRecentRecipesAsync, recentRecipes } from '../../../app/reducers/RecentRecipesSlice';
import { updateName } from '../../../app/reducers/NamePageSlice';
import { getUserAsync, user } from '../../../app/reducers/userReducer';
import { getAllRecipes, recipes } from '../../../app/reducers/recipesReducer';


export default function MainScreen() {
    //Redux
    const { userName } = useParams();
    const dispatch = useAppDispatch();
    const top10 = useAppSelector(topRecipes); //to remove
    const recent = useAppSelector(recentRecipes); // to remove
    const recipes_ = useAppSelector(recipes); // to use 
    const user_ = useAppSelector(user);
    //const [top10, setTop10] = useState([]); TODO
    //const [recent, setRecent] = useState([]); TODO

    useEffect(() => {
        dispatch(getAllRecipes());
        //filterTopRecipes(); TODO
        //filterRecentRecipes(); TODO
        dispatch(getUserAsync(userName))
        dispatch(getTopRecipesAsync());
        dispatch(getRecentRecipesAsync());
        dispatch(updateName(`/${user_.name}/MainScreen`));
    }, []);

    function imageClick(recipe:any, row:number){
        let from = '';
        let isNew_ = false;
        if(row == 1)
            from = 'top10'
        else from = 'recent'
        try {
            console.log(recipe._id)
            dispatch(getSelectAsync({name : recipe.name}))
        } catch (error) {
            console.error();
        }
    }
    
    //TODO: to write the code of the two functions => find the top recipes and the most recent recipes
    // function filterTopRecipes(){

    // }

    // function filterRecentRecipes(){

    // }

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
                                return(<SwiperSlide key={index} onClick={() => imageClick(recipe, 1)}>
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
                                return(
                                    <SwiperSlide key={index}  onClick={(ev:any) => imageClick(recipe, 2)}>
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
