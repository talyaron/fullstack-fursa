import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { recipesByType, recipesByTypeAsync } from '../../../app/reducers/recipesReducer';
import Bagemenu from '../../components/menuBar/menu';
import background from '../../images/background.jpg';
import tools from '../../images/tools.jpg';
import './RecipeTypes.scss';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function RecipeTypes() {

    const { userName, type } = useParams();
    console.log(type)
    const dispatch = useAppDispatch();
    const recipesByType_ = useAppSelector(recipesByType);

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
                        {recipesByType_.map((recipe: any, index) => {
                            if (index === 0) {
                                return (
                                    <div key={index} className='item1'>
                                        <img src={recipe.image} alt="" />
                                        <p>{recipe.name}</p>
                                    </div>
                                )
                            } 
                            else if (index === 1) {
                                return (
                                    <div key={index} className='item2'>
                                        <img src={recipe.image} alt="" />
                                        <p>{recipe.name}</p>
                                    </div>
                                )
                            }
                            // else if (index === 2) {
                            //     return (
                            //         <div key={index} className='item3'>
                            //             <img src={recipe.image} alt="" />
                            //             <p>{recipe.name}</p>
                            //         </div>
                            //     )
                            // }
                            // else {
                            //     return (
                            //         <div key={index} className='item4'>
                            //             <img src={recipe.image} alt="" />
                            //             <p>{recipe.name}</p>
                            //         </div>
                            //     )
                            // }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}