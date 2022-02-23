import './RecipeInfo.scss';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Bagemenu from '../../components/menuBar/menu';
import background from '../../images/background.jpg';
import img1 from '../../images/img1.png';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { useState , useEffect } from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import { recipeProp } from '../../../App';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
        readOnly: true,
    },
});

interface recipeInfo{
    id?: number;
    name? : string;
    image? : string;
    time? : string;
    people? : string;
    calories? : string;
    ingredients? : string;
    method? : string;
}

export default function RecipeInfo() {
    const [recipe, setRecipe] = useState<recipeInfo>({})
    const [like, setLike] = useState(0);
    const [from_, setFrom] = useState('');

    function handleLike() {
        setLike(like + 1);
    }
    
    useEffect(() => {
        axios.get('http://localhost:3004/selected/1').then(res => {
            console.log(res.data);
            const data = res.data.recipe;
            const f = res.data.from;
            setRecipe(data);
            setFrom(f);
        });
        axios.delete('http://localhost:3004/selected/1');
    }, []);
    console.log(from_);

    const editClick = (recipe:any) => {
        axios.post('http://localhost:3004/edit', {recipe, new: false, from: from_});
    } 

    return (
        <div className='info'>
            <div className='menu'>
                <Bagemenu />
            </div>
            <div className="content">
                <img className='image' src={background} />
                <div className='boxInfo'>
                    <div className="edit">
                        <Tooltip title='edit recipe'>
                            <Link to='/NewRecipe'>
                                <AutoAwesomeIcon sx={{
                                    color: '#b5739d', fontSize: 35
                                }} onClick={() => editClick(recipe)}  />
                            </Link>
                        </Tooltip>
                    </div>
                    <form className='box'>
                        <h1>{recipe.name}</h1>
                        <br />
                        <br />
                        <div className='info1'>
                            <div className='insertPhotos'>
                                <img src={recipe.image} alt="" />
                            </div>
                            <h2 className='by'>By : Dima Abbas</h2>
                            <div className='item'>
                                <FavoriteBorderIcon onClick={handleLike} sx={{ fontSize: 30, color: '#b5739d', paddingTop: '10px' }} />
                                <p>{like}</p>
                            </div>
                            <div className='item'>
                                <AccessTimeIcon sx={{ fontSize: 30, color: '#b5739d', paddingTop: '10px' }} />
                                <p>{recipe.time}</p>
                            </div>
                            <div className='item'>
                                <PeopleIcon sx={{ fontSize: 30, color: '#b5739d', paddingTop: '10px' }} />
                                <p>{recipe.people}</p>
                            </div>
                            <div className='item'>
                                <LocalFireDepartmentIcon sx={{ fontSize: 30, color: '#b5739d', paddingTop: '10px' }} />
                                <p>{recipe.calories}</p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className='info2'>
                            <CssTextField className='ingredients'
                                focused
                                id="custom-css-outlined-input"
                                label="Recipe's ingredients"
                                placeholder="Write your recipe ingredients here"
                                multiline
                                rows={10}
                                value={recipe.ingredients}
                            //maxRows={50}
                            />
                            <CssTextField className='steps'
                                focused
                                id="custom-css-outlined-input"
                                label="The Method"
                                placeholder="Write here the steps for preparing the recipe"
                                multiline
                                rows={10}
                                value={recipe.method}
                            //maxRows={50}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}