import Tooltip from '@mui/material/Tooltip';
import './Recipes.scss';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectedRecipe, updateFrom, updateRecipe, updateNew } from '../../features/item/itemSlice';
import { getMyRecipesAsync, myRecipes } from '../../features/myRecipes/MyRecipes';
import { updateName } from '../../features/pgaeName/NamePage';

export default function Recipes() {

    //const [recipes, setRecipes] = useState([]);

    //Redux
    //const recipe_ = useAppSelector(selectedRecipe);
    const dispatch = useAppDispatch();
    const myRecipe = useAppSelector(myRecipes);

    useEffect(() => {
        dispatch(getMyRecipesAsync());
    },[])

    const imageClick = (recipe:any) => {
        axios.patch('http://localhost:3004/select/1', {recipe, from:'myRecipe', isNew:false});
        dispatch(updateRecipe(recipe));
        dispatch(updateFrom('myRecipe'));
        dispatch(updateName('/User'))
    } 

    const addClick = () => {
        axios.patch('http://localhost:3004/select/1', {recipe:{}, from: 'myRecipe', isNew: true});
        dispatch(updateRecipe({}));
        dispatch(updateFrom('myRecipe'));
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
