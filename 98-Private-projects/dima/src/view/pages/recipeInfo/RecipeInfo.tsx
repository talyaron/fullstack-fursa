import './RecipeInfo.scss';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Bagemenu from '../../components/menuBar/menu';
import background from '../../images/background.jpg';
import img1 from '../../images/1.jpg';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

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

export default function RecipeInfo(){

    const [like,setLike] = useState(0);

    function handleLike(){
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
                    <AutoAwesomeIcon sx={{
                        color: '#b5739d', fontSize: 35, float: 'right',
                        paddingRight: '15px', paddingTop: '15px'
                    }} />
                    <form className='box'>
                        <h1>Recipe's Name</h1>
                        <br />
                        <br />
                        <div className='info1'>
                            <div className='insertPhotos'>
                                <img src={img1} alt="" />
                            </div>
                            <h2 className='by'>By : Dima Abbas</h2>
                            <div className='item'>
                                <FavoriteBorderIcon onClick={handleLike} sx={{ fontSize: 30, color: '#b5739d', paddingTop:'10px' }} />
                                <p>{like}</p>
                            </div>
                            <div className='item'>
                                <AccessTimeIcon sx={{ fontSize: 30, color: '#b5739d', paddingTop:'10px' }} />
                                <p>1 hour</p>
                            </div>
                            <div className='item'>
                                <PeopleIcon sx={{ fontSize: 30, color: '#b5739d', paddingTop:'10px' }} />
                                <p>10 peoples</p>
                            </div>
                            <div className='item'>
                                <LocalFireDepartmentIcon sx={{ fontSize: 30, color: '#b5739d', paddingTop:'10px' }} />
                                <p>1000 calories</p>
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
                                rows={10}
                                maxRows={30}
                            />
                            <Standard className='steps'
                                id="outlined-multiline-static"
                                label="The Method"
                                placeholder="Write here the steps for preparing the recipe"
                                multiline
                                rows={10}
                                maxRows={30}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}