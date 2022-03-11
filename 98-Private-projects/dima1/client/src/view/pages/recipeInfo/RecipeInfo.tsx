import './RecipeInfo.scss';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Bagemenu from '../../components/menuBar/menu';
import background from '../../images/background.jpg';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getSelectAsync, selectedFrom, selectedIsNew, selectedRecipe } from '../../../app/reducers/itemSlice';
import { selectPage, updateName } from '../../../app/reducers/NamePageSlice';
import { Text, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
    //bold: {fontWeight: 'bold'},
    italic: {fontStyle: 'italic'},
    underline: {textDecorationLine: 'underline'},
    color : {color: 'grey'}
})

export default function RecipeInfo() {
    const [like, setLike] = useState(0);
    const { userName ,recipeId} = useParams();

    //Redux toolkit
    const dispatch = useAppDispatch();
    const recipe_ = useAppSelector(selectedRecipe);
    const from_ = useAppSelector(selectedFrom);
    const isNew = useAppSelector(selectedIsNew);
    const pageName = useAppSelector(selectPage);

    useEffect(() => {
        dispatch(getSelectAsync());
    }, [])

    function handleLike() {
        setLike(like + 1);
    }

    function handleTo(){
        dispatch(updateName(`/${userName}/RecipeInfo`));
    } 

    return (
        <div className='info'>
            <div className='menu'>
                <Bagemenu userName={userName}/>
            </div>
            <div className="content">
                <img className='image' src={background} />
                <div className='boxInfo'>
                    <Link className='backTo' to={pageName}>
                        <ArrowBackSharpIcon sx={{color: '#b5739d', fontSize: 30}} onClick={handleTo}/>
                    </Link>
                    <div className='box'>
                        <div className="edit">
                            <Tooltip title='edit recipe'>
                                <Link to={`/${userName}/NewRecipe`}>
                                    <AutoAwesomeIcon sx={{
                                        color: '#b5739d', fontSize: 35}} />
                                </Link>
                            </Tooltip>
                        </div>
                        <h1>{recipe_.name}</h1>
                        <br />
                        <br />
                        <div className='info1'>
                            <div className='insertPhotos'>
                                <img src={recipe_.image} alt="" />
                            </div>
                            <h2 className='by'>By : Dima Abbas</h2>
                            <div className='item'>
                                <FavoriteBorderIcon onClick={handleLike} sx={{ fontSize: 40, color: '#b5739d', paddingTop: '15px' }} />
                                <p>{like}</p>
                            </div>
                            <div className='item'>
                                <AccessTimeIcon sx={{ fontSize: 40, color: '#b5739d', paddingTop: '15px' }} />
                                <p>{recipe_.time}</p>
                            </div>
                            <div className='item'>
                                <PeopleIcon sx={{ fontSize: 40, color: '#b5739d', paddingTop: '15px' }} />
                                <p>{recipe_.people}</p>
                            </div>
                            <div className='item'>
                                <LocalFireDepartmentIcon sx={{ fontSize: 40, color: '#b5739d', paddingTop: '15px' }} />
                                <p>{recipe_.calories}</p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className='info3'>
                            <h1>Ingredients</h1>
                            <Text style={{fontStyle: 'italic', color: 'gray',
                                paddingLeft: '20px', fontSize: 20,lineHeight: 40}}>
                                {recipe_.ingredients}
                            </Text>
                            <br />
                            <br />
                            <br />
                            <br />
                            <h1>The Method</h1>
                            <Text style={{fontStyle: 'italic', color: 'gray',
                                paddingLeft: '20px', fontSize: 20,lineHeight: 40}}>
                                {recipe_.method}
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}