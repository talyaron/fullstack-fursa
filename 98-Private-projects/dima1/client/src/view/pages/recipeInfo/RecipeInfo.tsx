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
import { selectedRecipe, selectRecipeAsync } from '../../../app/reducers/itemSlice';
import { selectPage, updateName } from '../../../app/reducers/NamePageSlice';
import { Text, StyleSheet } from 'react-native';

export default function RecipeInfo() {
    console.log('Hiii')
    const [like, setLike] = useState(0);
    const { userName, recipeId } = useParams();
    const [isTrue, setIsTrue] = useState(false);

    //Redux toolkit
    const dispatch = useAppDispatch();
    const recipe_ = useAppSelector(selectedRecipe);
    const pageName = useAppSelector(selectPage);

    useEffect(() => {
        dispatch(selectRecipeAsync(recipeId));
        console.log(recipe_.types);
        if (recipe_.notes) setIsTrue(true)
        else setIsTrue(false)
    }, [])

    function handleLike() {
        setLike(like + 1);
    }

    function handleTo() {
        dispatch(updateName(`/${userName}/RecipeInfo`));
    }

    return (
        <div className='info'>
            <Bagemenu userName={userName} />
            <div className="content">
                <img className='image' src={background} />
                <div className='boxInfo'>
                    <Link className='backTo' to={pageName}>
                        <ArrowBackSharpIcon sx={{ color: '#b5739d', fontSize: 30 }} onClick={handleTo} />
                    </Link>
                    <div className='box'>
                        <div className="edit">
                            <Tooltip title='edit recipe' hidden={!(userName === recipe_.userName)}>
                                <Link to={`/${userName}/${recipeId}/EditRecipe`}>
                                    <AutoAwesomeIcon sx={{
                                        color: '#b5739d', fontSize: 35
                                    }} />
                                </Link>
                            </Tooltip>
                        </div>
                        <div className='types'>
                            <h3>Filed under : </h3>
                            {recipe_.types.map((type, index) => {
                                if(type.isTrue)
                                    return (
                                        <div className='type' key={index} >{type.name}</div>
                                    )
                            })}
                        </div>
                        <br />
                        <br />
                        <h1>{recipe_.name}</h1>
                        <br />
                        <br />
                        <div className='info1'>
                            <div className='insertPhotos'>
                                <img src={recipe_.image} alt="" />
                            </div>
                            <h2 className='by'>By : {recipe_.userName}</h2>
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
                            <Text style={{
                                fontStyle: 'italic', color: 'gray',
                                paddingLeft: '20px', fontSize: 20, lineHeight: 40
                            }}>
                                {recipe_.ingredients}
                            </Text>
                            <br />
                            <br />
                            <br />
                            <br />
                            <h1>The Method</h1>
                            <Text style={{
                                fontStyle: 'italic', color: 'gray',
                                paddingLeft: '20px', fontSize: 20, lineHeight: 40
                            }}>
                                {recipe_.method}
                            </Text>
                            <br />
                            <br />
                            <br />
                            <br />
                            <div hidden={!isTrue}>
                                <h1>Notes</h1>
                                <Text style={{
                                    fontStyle: 'italic', color: 'gray',
                                    paddingLeft: '20px', fontSize: 20, lineHeight: 40
                                }}>
                                    {recipe_.notes}
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}