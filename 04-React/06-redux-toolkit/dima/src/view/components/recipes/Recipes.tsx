import Tooltip from '@mui/material/Tooltip';
import './Recipes.scss';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectedRecipe, updateFrom, updateRecipe, updateNew } from '../../features/item/itemSlice';
import { getRecipesAsync, myRecipes } from '../../features/recipes/RecipesArray';

export default function Recipes() {

    //const [recipes, setRecipes] = useState([]);

    //Redux
    //const recipe_ = useAppSelector(selectedRecipe);
    const myRecipe = useAppSelector(myRecipes);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getRecipesAsync());
    },[])

    // useEffect(() => {
    //     axios.get('http://localhost:3004/recipe').then(res => {
    //         const data = res.data;
    //         setRecipes(data);
    //     });
    // }, []);

    // console.log(recipes);

    const imageClick = (recipe:any) => {
        // axios.post('http://localhost:3004/selected', {recipe, from: 'recipe'});
        dispatch(updateRecipe(recipe));
    } 

    const addClick = () => {
        //axios.post('http://localhost:3004/edit', {recipe: {}, new: true, from: 'recipe'});
        dispatch(updateRecipe({}));
        dispatch(updateFrom('recipe'));
        dispatch(updateNew(true));
    }

    return (
        <div className="recipes">
            <h2 className='title1'>Recipes</h2>
            <div className='add'>
                <Tooltip title='add new recipe'>
                    <Link to='/NewRecipe'>
                        <AddCircleOutlineIcon sx={{ fontSize: 40, color: '#b5739d'}} onClick={() => addClick()}/>
                    </Link>
                </Tooltip>
            </div>

            {myRecipe.map((recipe:any, index:number) => {
                return(<div key={index} className="item">
                        <Link to='/RecipeInfo'>
                            <div className='itemImg'><img src={recipe.image} alt="" onClick={() => imageClick(recipe)}/></div>
                        </Link>
                        <div className='title'><p>{recipe.name}</p></div>
                    </div>);
            })}
        </div>
    );
}
