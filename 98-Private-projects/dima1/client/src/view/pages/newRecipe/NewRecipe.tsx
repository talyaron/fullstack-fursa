import './NewRecipe.scss';
import Bagemenu from "../../components/menuBar/menu";
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import background from '../../images/background.jpg';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { Box, Dialog, DialogTitle, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from "react-router";
import Tooltip from '@mui/material/Tooltip';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectedRecipe, getSelectAsync, updateRecipe } from '../../../app/reducers/itemSlice';
import { addToMyRecipe } from '../../../app/reducers/MyRecipesSlice';
import { selectPage, updateName } from '../../../app/reducers/NamePageSlice';
import { updateTopRecipes } from '../../../app/reducers/TopRecipesSlice';
import { updateRecent } from '../../../app/reducers/RecentRecipesSlice';
import { updateMyRecipe } from '../../../app/reducers/MyRecipesSlice';

const Standard = styled(TextField)({
    '& label.Mui-focused': {
        color: '#b5739d',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#b5739d',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#b5739d',
        },
        '&:hover fieldset': {
            borderColor: '#b5739d',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#b5739d',
        },
    },
    input: {
        color: 'grey',
        fontSize: 15,
    },
});

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#b5739d',
    },
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: '#b5739d',
        },
    },
    input: {
        color: "gray",
        fontSize: 15,
    },
});

interface recipeInfo {
    _id: String;
    name: string;
    image: string;
    time: string;
    people: string;
    calories: string;
    ingredients: string;
    method: string;
}

export default function NewRecipe() {
    //Redux
    const dispatch = useAppDispatch();
    let navigate = useNavigate();
    
    const { userName } = useParams();
    const recipe_ = useAppSelector(selectedRecipe);
    //const from = useAppSelector(selectedFrom);
    //const isNew = useAppSelector(selectedIsNew);
    const pageName = useAppSelector(selectPage)

    const [recipe, setRecipe] = useState<recipeInfo>(recipe_);

    let to = '';

    useEffect(() => {
        dispatch(getSelectAsync(userName))
    }, [])

    // if (from === 'userRecipes' && isNew)
    //     to = '/User';
    // else to = '/RecipeInfo';

    function handleChange(ev: any) {
        switch (ev.target.name) {
            case 'recipeName':
                setRecipe({ ...recipe, name: ev.target.value });
                break;
            case 'time':
                setRecipe({ ...recipe, time: ev.target.value })
                break;
            case 'people':
                setRecipe({ ...recipe, people: ev.target.value });
                break;
            case 'cal':
                setRecipe({ ...recipe, calories: ev.target.value });
                break;
            case 'ingredients':
                setRecipe({ ...recipe, ingredients: ev.target.value });
                break;
            case 'method':
                setRecipe({ ...recipe, method: ev.target.value });
                break;
            case 'image':
                setRecipe({ ...recipe, image: ev.target.value });
        }
        dispatch(updateRecipe(recipe))
    }

    function handleSave(ev:any) {
        ev.preventDefault();
        if (to === '/User') {
            axios.post('/userRecipes/add-new-userRecipe', recipe_);
        }
        else {
            //add a action to udpate a recipe in the array
            // console.log(recipe_)
            // axios.patch('/selectRecipe/edit-select-recipe', recipe_);
            // axios.put(`/edit-${from}`, recipe_)
            // dispatch(updateSelectAsync({info:recipe_, from:from, isNew:isNew});
        }
        navigate(to);
    }

    function handleTo() {
        dispatch(updateName('/NewRecipe'));
    }

    return (
        <div className='new'>
            <div className='menu'>
                <Bagemenu userName={userName}/>
            </div>
            <div className="content">
                <img className='image' src={background} />
                <div className='boxInfo'>
                    <Link className='backTo' to={pageName}>
                        <ArrowBackSharpIcon sx={{ color: '#b5739d', fontSize: 30 }} onClick={handleTo} />
                    </Link>

                    <form className='box' onSubmit={handleSave}>
                        <div className="save">
                            <Tooltip title='save'>
                                <button type='submit'>
                                    <BookmarkAddIcon sx={{
                                        color: '#b5739d', fontSize: 35
                                    }} />
                                </button>
                            </ Tooltip>
                        </div>
                        <Standard id="standard-basic" variant="standard"
                            focused
                            required
                            placeholder="Insert your recipe's name"
                            size="small" sx={{ width: '30ch' }}
                            name='recipeName'
                            value={recipe.name}
                            onChange={handleChange} />
                        <br />
                        <br />
                        <div className='info1'>
                            <div className='insertPhotos'>
                                <input type="text" placeholder='Upload Image by URL' name='image'
                                    value={undefined} required onChange={handleChange} />
                            </div>
                            <h2 className='by'>By : Dima Abbas</h2>
                            <div className='item'>
                                <FavoriteBorderIcon sx={{ fontSize: 40, color: '#b5739d', paddingTop: '10px' }} />
                                <p>0</p>
                            </div>
                            <div className='item'>
                                <AccessTimeIcon sx={{ fontSize: 40, color: '#b5739d', paddingTop: '10px' }} />
                                <Standard id="standard-basic" variant="standard"
                                    focused
                                    required
                                    placeholder=""
                                    size="small" sx={{ width: '20ch' }}
                                    name='time' 
                                    value={recipe.time}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='item'>
                                <PeopleIcon sx={{ fontSize: 40, color: '#b5739d', paddingTop: '10px' }} />
                                <Standard id="standard-basic" variant="standard"
                                    focused
                                    required
                                    placeholder=""
                                    size="small" sx={{ width: '20ch' }}
                                    name='people'
                                    value={recipe.people}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='item'>
                                <LocalFireDepartmentIcon sx={{ fontSize: 40, color: '#b5739d', paddingTop: '10px' }} />
                                <Standard id="standard-basic" variant="standard"
                                    focused
                                    required
                                    placeholder=""
                                    size="small" sx={{ width: '20ch' }}
                                    name='cal'
                                    value={recipe.calories}
                                    onChange={handleChange} />
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className='info2'>
                            <CssTextField className='ingredients'
                                focused
                                required
                                id="custom-css-outlined-input"
                                label="Recipe's ingredients"
                                placeholder="Write your recipe ingredients here"
                                multiline
                                rows={10}
                                name='ingredients'
                                value={recipe.ingredients}
                                onChange={handleChange}
                            />
                            <CssTextField className='steps'
                                focused
                                required
                                id="custom-css-outlined-input"
                                label="The Method"
                                placeholder="Write here the steps for preparing the recipe"
                                multiline
                                rows={10}
                                name='method'
                                value={recipe.method}
                                onChange={handleChange}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}