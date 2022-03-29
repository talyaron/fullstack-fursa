import './RecipeInfo.scss';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import DeleteIcon from '@mui/icons-material/Delete';
import Bagemenu from '../../components/menuBar/menu';
import background from '../../images/background.jpg';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { useState, useEffect } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectedRecipe, selectRecipeAsync } from '../../../app/reducers/itemSlice';
import { Text, StyleSheet } from 'react-native';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import axios from 'axios';
import { getRecipeLikes, recipeLikes } from '../../../app/reducers/LikeReducer';

export default function RecipeInfo() {
    const { userName, recipeId } = useParams();
    const [isTrue, setIsTrue] = useState(false);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    
    //Redux toolkit
    const dispatch = useAppDispatch();
    const recipe_ = useAppSelector(selectedRecipe);
    const likes_ = useAppSelector(recipeLikes);
    const [like, setLike] = useState(CheckLike());

    useEffect(() => {
        dispatch(selectRecipeAsync(recipeId));
        dispatch(getRecipeLikes(recipeId));
        if (recipe_.notes) setIsTrue(true);
        else setIsTrue(false)
    }, [])

    async function handleLike() {
        if(!like){
            const result = await axios.post('/selectRecipe/like-dislike', {name : userName, like : true, id : recipeId});
            if(result.data.ok) console.log('like');
            else console.log('failed to like');
        } else{
            const result = await axios.post('/selectRecipe/like-dislike', {name : userName, like : false, id : recipeId});
            if(result.data.ok) console.log('dislike');
            else console.log('failed to dislike');
        }
        setLike(!like);
        dispatch(getRecipeLikes(recipeId));
    }

    function handleClickOpen() {
        setOpen(true);
    };

    function CheckLike() : boolean{
        let isLike = false;
        if(userName){
            isLike = likes_.users.includes(userName);
        }
        return isLike;
    }

    async function handleClose(ev: any) {
        setOpen(false);
        if (ev.target.name === 'delete') {
            const response = await axios.post('/selectRecipe/delete-recipe', {id : recipeId});
            const data = response.data;
            if (data.ok)
                navigate(`/${userName}`);
            else alert('Recipe has not been deleted');
        }
    };

    return (
        <div className='info'>
            <Bagemenu userName={userName} />
            <div className="content">
                <img className='image' src={background} />
                <div className='boxInfo'>
                    {/* <Link className='backTo' to={pageName}>
                        <ArrowBackSharpIcon sx={{ color: '#b5739d', fontSize: 30 }} onClick={handleTo} />
                    </Link> */}
                    <div className='box'>
                        <div className="edit-delete" hidden={!(userName === recipe_.userName)}>
                            <Tooltip title='delete recipe'>
                                <DeleteIcon sx={{
                                    color: '#b5739d', fontSize: 35
                                }} onClick={handleClickOpen} />
                            </Tooltip>
                        </div>
                        <div className="edit-delete">
                            <Tooltip title='edit recipe' hidden={!(userName === recipe_.userName)}>
                                <Link to={`/${userName}/${recipeId}/EditRecipe`}>
                                    <AutoFixHighIcon sx={{
                                        color: '#b5739d', fontSize: 35
                                    }} />
                                </Link>
                            </Tooltip>
                        </div>
                        <div className='types'>
                            <h3>Filed under : </h3>
                            {recipe_.types.map((type, index) => {
                                if (type.isTrue)
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
                                <FavoriteBorderIcon onClick={handleLike} sx={{ fontSize: 45, color: like ? 'red' : 'false', paddingTop: '15px' }} />
                                <p>{likes_.users.length}</p>
                            </div>
                            <div className='item'>
                                <AccessTimeIcon sx={{ fontSize: 45, color: '#b5739d', paddingTop: '15px' }} />
                                <p>{recipe_.time}</p>
                            </div>
                            <div className='item'>
                                <PeopleIcon sx={{ fontSize: 45, color: '#b5739d', paddingTop: '15px' }} />
                                <p>{recipe_.people}</p>
                            </div>
                            <div className='item'>
                                <LocalFireDepartmentIcon sx={{ fontSize: 45, color: '#b5739d', paddingTop: '15px' }} />
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
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogContent style={{ backgroundColor: '#e6d0de', color: '#b5739d' }}>
                    <DialogTitle id="responsive-dialog-title">
                        {"Delete Recipe"}
                    </DialogTitle>
                    <DialogContentText>
                        Are you sure you want to delete this recipe ?
                    </DialogContentText>
                    <br />
                    <DialogActions>
                        <Button name='delete' onClick={handleClose} sx={{ color: '#b5739d' }}>
                            Delete
                        </Button>
                        <Button onClick={handleClose} name='cancle' sx={{ color: '#b5739d' }}>
                            Cancle
                        </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </div>
    );
}