import Tooltip from '@mui/material/Tooltip';
import './Recipes.scss';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getSelectAsync, selectRecipeAsync } from '../../../app/reducers/itemSlice';
import { getMyRecipesAsync, myRecipes } from '../../../app/reducers/MyRecipesSlice';
import { updateName } from '../../../app/reducers/NamePageSlice';

export default function Recipes(props:any) {
    //Redux
    const { userName } = props;
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
            navigate(`/${userName}/NewRecipe`)
        } catch (error) {
            console.error();
        }
        //axios.patch('http://localhost:3004/select/1', {recipe:{}, from: 'myRecipe', isNew: true});
        // dispatch(updateRecipe({}));
        // dispatch(updateFrom('myRecipe'));
        // dispatch(updateNew(true));
    }
    
    return (
        <div className="recipes">
            <h2 className='title1'>Recipes</h2>
            <div className='add'>
                <Tooltip title='add new recipe'>
                    {/* <Link to='/NewRecipe'> */}
                    <AddCircleOutlineIcon sx={{ fontSize: 40, color: '#b5739d'}} onClick={() => addClick()}/>
                    {/* </Link> */}
                </Tooltip>
            </div>

            {myRecipe.myRecipes.map((recipe:any, index:number) => {
                return(
                    <div key={index} className="item">
                        <Link to={`/${userName}/${recipe._id}`}>
                            <div className='itemImg' onClick={() => imageClick(recipe)}><img src={recipe.image} alt=""/></div>
                        </Link>
                        <div className='title'><p>{recipe.name}</p></div>
                    </div>);
            })}
        </div>
    );
}
