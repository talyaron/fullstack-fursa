import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { recipes, recipesByTypeAsync } from '../../../app/reducers/recipesReducer';
import Bagemenu from '../../components/menuBar/menu';
import background from '../../images/background.jpg';
import tools from '../../images/tools.jpg';
import './RecipeTypes.scss';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function RecipeTypes() {

    const { userName, type } = useParams();
    console.log(type)
    const dispatch = useAppDispatch();
    const recipesByType_ = useAppSelector(recipes);

    useEffect(() => {
        dispatch(recipesByTypeAsync(type))
    }, [])

    return (
        <div className='recipeTypes'>
            <div className='menuBar' id="outer-container">
                <Bagemenu userName={userName} />
            </div>
            <div className='content'>
                <img className='image' src={background} alt="" />
                <div className='content1'>
                    <div className='title'>
                        <img src={tools} alt="Food" />
                        <h1>{type}</h1>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className='recipes'>
                        <div className='grid1'>
                            {recipesByType_.slice(0, 3).map((recipe: any, index) => {
                                return (
                                    <div key={index} className={`item${index}`}>
                                        <Link to={`/${userName}/${recipe._id}`}>
                                            <img src={recipe.image} alt="" />
                                        </Link>
                                        <p>{recipe.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='grid2'>
                            {recipesByType_.slice(4).map((recipe: any, index) => {
                                return (
                                    <div key={index} className='item'>
                                        <Link to={`/${userName}/${recipe._id}`}>
                                            <img src={recipe.image} alt="" />
                                        </Link>
                                        <p>{recipe.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}