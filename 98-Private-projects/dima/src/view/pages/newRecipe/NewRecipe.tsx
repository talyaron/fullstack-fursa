import './NewRecipe.scss';
import Bagemenu from "../../components/menuBar/menu";
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import background from '../../images/background.jpg';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { Box, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import RecipeInfo from '../../pages/recipeInfo/RecipeInfo';
import { recipeProp } from '../../../App';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import axios from 'axios';

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

interface recipeInfo{
    id? : number;
    name? : string;
    img? : string;
    time? : string;
    people? : string;
    calories? : string;
    ingredients? : string;
    method? : string;
}

export default function NewRecipe() {

    const [recipe, setRecipe] = useState<recipeInfo>({});
    const [linkTo, setLink] = useState('/RecipeInfo');
    const [from_, setFrom] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3004/edit/1').then(res => {
            console.log(res.data);
            const data = res.data.recipe;
            const new_ = res.data.new;
            const f = res.data.from;
            console.log(new_)
            setRecipe(data);
            setFrom(f);
            if(!new_)
                setLink('/RecipeInfo');
            else {
                console.log("yes")
                setLink('/User');
            }
        });
        axios.delete('http://localhost:3004/edit/1');
    }, []);

    function handleChange(ev: any) {
        console.dir(recipe);
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
        }
    }

    function handleSave() {
        const newRecipe = recipe;
        setRecipe(newRecipe);
        if(linkTo === '/User')
            axios.post('http://localhost:3004/'+`${from_}`, recipe);
        else {
            console.log(recipe);
            console.log(from_);
            axios.post('http://localhost:3004/selected', {recipe, from: from_});
            axios.put('http://localhost:3004/'+`${from_}`+'/'+`${recipe.id}`, recipe);
            //axios.post('http://localhost:3004/selected', {recipe, from: from_});
        }
    }

    return (
        <div className='new'>
            <div className='menu'>
                <Bagemenu />
            </div>
            <div className="content">
                <img className='image' src={background} />
                <div className='boxInfo'>
                    <div className="save">
                        <Tooltip title='save'>
                            <Link to={linkTo}>
                                <BookmarkAddIcon sx={{
                                    color: '#b5739d', fontSize: 35
                                }} onClick={handleSave} />
                            </Link>
                        </ Tooltip>
                    </div>
                    <Box className='box' component="form"
                        sx={{ '& .MuiTextField-root': { m: 1 }, }}
                        autoComplete="off"
                    >
                        <Standard id="standard-basic" variant="standard"
                            focused
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
                                <InsertPhotoIcon sx={{ fontSize: 250, color: '#b5739d' }} />
                            </div>
                            <h2 className='by'>By : Dima Abbas</h2>
                            <div className='item'>
                                <FavoriteBorderIcon sx={{ fontSize: 30, color: '#b5739d', paddingTop: '12px' }} />
                                <p>0</p>
                            </div>
                            <div className='item'>
                                <AccessTimeIcon sx={{ fontSize: 30, color: '#b5739d', paddingTop: '12px' }} />
                                <Standard id="standard-basic" variant="standard"
                                    focused
                                    placeholder=""
                                    size="small" sx={{ width: '20ch' }}
                                    name='time'
                                    //onKeyUp={handleUpdate} 
                                    value={recipe.time}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='item'>
                                <PeopleIcon sx={{ fontSize: 30, color: '#b5739d', paddingTop: '10px' }} />
                                <Standard id="standard-basic" variant="standard"
                                    focused
                                    placeholder=""
                                    size="small" sx={{ width: '20ch' }}
                                    name='people'
                                    //onKeyUp={handleUpdate} 
                                    value={recipe.people}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='item'>
                                <LocalFireDepartmentIcon sx={{ fontSize: 30, color: '#b5739d', paddingTop: '12px' }} />
                                <Standard id="standard-basic" variant="standard"
                                    focused
                                    placeholder=""
                                    size="small" sx={{ width: '20ch' }}
                                    name='cal'
                                    //onKeyUp={handleUpdate}
                                    value={recipe.calories}
                                    onChange={handleChange} />
                            </div>
                        </div>
                        <div className='info2'>
                            <CssTextField className='ingredients'
                                focused
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