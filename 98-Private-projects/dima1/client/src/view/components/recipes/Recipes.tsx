import Tooltip from '@mui/material/Tooltip';
import './Recipes.scss';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getSelectAsync } from '../../../app/reducers/itemSlice';
import { getMyRecipesAsync, myRecipes } from '../../../app/reducers/MyRecipesSlice';
import { updateName } from '../../../app/reducers/NamePageSlice';

export default function Recipes() {
    //Redux
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const myRecipe = useAppSelector(state => state.myRecipes);

    useEffect(() => {
        if(myRecipe.status === 'failed')
            navigate('/');
         
    })
    useEffect(() => {
        dispatch(getMyRecipesAsync());
    },[])

    function imageClick(recipe:any){
        
        dispatch(updateName('/User'))
        try {
            dispatch(getSelectAsync({name : recipe.name}))
        } catch (error) {
            console.error();
        }
    } 

    function addClick(){
        try {
            //dispatch(updateSelectAsync({info:{}, from:'userRecipes', isNew:true}))
        } catch (error) {
            console.error();
        }
        //axios.patch('http://localhost:3004/select/1', {recipe:{}, from: 'myRecipe', isNew: true});
        // dispatch(updateRecipe({}));
        // dispatch(updateFrom('myRecipe'));
        // dispatch(updateNew(true));
    }
    console.log(myRecipe.myRecipes)
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

            {myRecipe.myRecipes.map((recipe:any, index:number) => {
                return(
                    <div key={index} className="item">
                        <Link to='/RecipeInfo'>
                            <div className='itemImg' onClick={() => imageClick(recipe)}><img src={recipe.image} alt=""/></div>
                        </Link>
                        <div className='title'><p>{recipe.name}</p></div>
                    </div>);
            })}
        </div>
    );
}
