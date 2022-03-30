import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getSearchRecipes, recipes } from '../../../app/reducers/recipesReducer';
import Bagemenu from '../../components/menuBar/menu';
import background from '../../images/background.jpg';
import tools from '../../images/tools.jpg';
import './Search.scss';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function Search() {

    const { userName, category, text } = useParams();
    const dispatch = useAppDispatch();

    const searchRecipes_ = useAppSelector(recipes);
    console.log(searchRecipes_);

    useEffect(() => {
        dispatch(getSearchRecipes({select : category, searchText: text}));
    }, [])

    return (
        <div className='Search'>
            <div className='menuBar' id="outer-container">
                <Bagemenu userName={userName} />
            </div>
            <div className='content'>
                <img className='image' src={background} alt="" />
                <div className='content1'>
                    <div className='title'>
                        <img src={tools} alt="Food" />
                        <h1>{text}</h1>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className='recipes'>
                        <div className='grid1'>
                            {searchRecipes_.slice(0, 3).map((recipe: any, index) => {
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
                            {searchRecipes_.slice(4).map((recipe: any, index) => {
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