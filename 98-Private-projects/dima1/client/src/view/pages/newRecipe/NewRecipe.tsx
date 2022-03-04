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
import { useNavigate } from "react-router";
import Tooltip from '@mui/material/Tooltip';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectedRecipe, selectedFrom, selectedIsNew, updateRecipe, getSelectAsync } from '../../features/item/itemSlice';
import { addToMyRecipe } from '../../features/myRecipes/MyRecipes';
import { selectPage, updateName } from '../../features/pgaeName/NamePage';
import { updateTopRecipes } from '../../features/topRecipes/TopRecipes';
import { updateRecent } from '../../features/recentRecipes/RecentRecipes';
import { updateMyRecipe } from '../../features/myRecipes/MyRecipes';

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
    id: number;
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

    const recipe_ = useAppSelector(selectedRecipe);
    const from = useAppSelector(selectedFrom);
    const isNew = useAppSelector(selectedIsNew);
    const pageName = useAppSelector(selectPage)

    const [recipe, setRecipe] = useState<recipeInfo>(recipe_);

    let to = '';

    useEffect(() => {
        dispatch(getSelectAsync())
    }, [])

    if (from === 'myRecipe' && isNew)
        to = '/User';
    else to = '/RecipeInfo';

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
        dispatch(updateRecipe(recipe))
        if (to === '/User') {
            axios.post('add-new-userRecipe', recipe_);
            //dispatch(addToMyRecipe(recipe_));
        }
        else {
            //add a action to udpate a recipe in the array
            axios.put('http://localhost:3004/' + `${from}` + '/' + `${recipe_.id}`, recipe);
            axios.patch('http://localhost:3004/select/1', { recipe });
            dispatch(updateRecipe(recipe))
            if (from === 'top10')
                dispatch(updateTopRecipes([recipe, recipe.id]))
            else if (from === 'recent')
                dispatch(updateRecent([recipe, recipe.id]))
            else dispatch(updateMyRecipe([recipe, recipe.id]))
        }
    }

    function handleTo() {
        dispatch(updateName('/NewRecipe'));
    }

    return (
        <div className='new'>
            <div className='menu'>
                <Bagemenu />
            </div>
            <div className="content">
                <img className='image' src={background} />
                <div className='boxInfo'>
                    <Link className='backTo' to={pageName}>
                        <ArrowBackSharpIcon sx={{ color: '#b5739d', fontSize: 30 }} onClick={handleTo} />
                    </Link>

                    <Box className='box' component="form"
                        sx={{ '& .MuiTextField-root': { m: 1 }, }}
                        autoComplete="off"
                        onSubmit={handleSave}
                    >
                        <div className="save">
                            <Tooltip title='save'>
                                <Link to={to}>
                                    <BookmarkAddIcon sx={{
                                        color: '#b5739d', fontSize: 35
                                    }} type="submit" />
                                </Link>
                            </ Tooltip>
                        </div>
                        <Standard id="standard-basic" variant="standard"
                            focused
                            required
                            placeholder="Insert your recipe's name"
                            size="small" sx={{ width: '30ch' }}
                            //onKeyUp={handleUpdate}
                            name='recipeName'
                            value={recipe.name}
                            onChange={handleChange} />
                        <br />
                        <br />
                        <div className='info1'>
                            <div className='insertPhotos'>
                                <input type="text" placeholder='Upload Image by URL' name='image'
                                    value={undefined} required onChange={handleChange} />
                                {/* <InsertPhotoIcon sx={{ fontSize: 250, color: '#b5739d' }} /> */}
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
                                    //onKeyUp={handleUpdate} 
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
                                    //onKeyUp={handleUpdate} 
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
                                    //onKeyUp={handleUpdate}
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
                                //onKeyUp={handleUpdate}
                                value={recipe.ingredients}
                                onChange={handleChange}
                            //maxRows={50}
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
                                //onKeyUp={handleUpdate}
                                value={recipe.method}
                                onChange={handleChange}
                            //maxRows={50}
                            />
                        </div>
                    </Box>
                </div>
            </div>
        </div>
    );
}