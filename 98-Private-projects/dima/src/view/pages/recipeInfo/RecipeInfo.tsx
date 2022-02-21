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
import { useState } from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import { recipeInfo, recipeProp } from '../../../App';
import { Link } from 'react-router-dom';

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
        readonly: true,
    },
});

// interface recipeInfo{
//     name? : any|undefined;
//     img? : string;
//     time? : string;
//     people? : string;
//     cal? : string;
//     ingredients? : string;
//     method? : string;
// }

export default function RecipeInfo(props: recipeProp) {
    const { recipe, setRecipe } = props;
    const [like, setLike] = useState(0);

    function handleLike() {
        setLike(like + 1);
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
                                }} />
                            </Link>
                        </Tooltip>
                    </div>
                    <form className='box'>
                        <h1>{recipe.name}</h1>
                        <br />
                        <br />
                        <div className='info1'>
                            <div className='insertPhotos'>
                                <img src={img1} alt="" />
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
                                <p>{recipe.cal}</p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className='info2'>
                            <Standard className='ingredients'
                                id="outlined-multiline-static"
                                label="Recipe's ingredients"
                                placeholder="Write your recipe ingredients here"
                                multiline
                                rows={20}
                                value={recipe.ingredients}
                            //maxRows={50}
                            />
                            <Standard className='steps'
                                id="outlined-multiline-static"
                                label="The Method"
                                placeholder="Write here the steps for preparing the recipe"
                                multiline
                                rows={20}
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