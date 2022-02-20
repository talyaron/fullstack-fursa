import './NewRecipe.scss';
import Bagemenu from "../../components/menuBar/menu";
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import background from '../../background.jpg';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { Box, TextField } from '@mui/material';
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

export default function NewRecipe() {
    return (
        <div className='new'>
            <div className='menu'>
                <Bagemenu />
            </div>
            <div className="content">
                <img className='image' src={background} />
                <div className='boxInfo'>
                    <BookmarkAddIcon sx={{
                        color: '#b5739d', fontSize: 35, float: 'right',
                        paddingRight: '15px', paddingTop: '15px'
                    }} />
                    <Box className='box' component="form"
                        sx={{ '& .MuiTextField-root': { m: 1 }, }}
                        autoComplete="off"
                    >
                        <Standard id="standard-basic" variant="standard"
                            focused
                            placeholder="Insert your recipe's name"
                            size="small" sx={{ width: '30ch' }} />
                        <br />
                        <br />
                        <div className='info1'>
                            <div className='insertPhotos'>
                                <InsertPhotoIcon sx={{ fontSize: 250, color: '#b5739d' }} />
                            </div>
                            <h1 className='by'>By : Dima Abbas</h1>
                            <div className='item'>
                                <FavoriteBorderIcon sx={{ fontSize: 30, color: '#b5739d' }} />
                                <p>0</p>
                            </div>
                            <div className='item'>
                                <AccessTimeIcon sx={{ fontSize: 30, color: '#b5739d' }} />
                                <Standard id="standard-basic" variant="standard"
                                    focused
                                    placeholder=""
                                    size="small" sx={{ width: '20ch' }} />
                            </div>
                            <div className='item'>
                                <PeopleIcon sx={{ fontSize: 30, color: '#b5739d' }} />
                                <Standard id="standard-basic" variant="standard"
                                    focused
                                    placeholder=""
                                    size="small" sx={{ width: '20ch' }} />
                            </div>
                            <div className='item'>
                                <LocalFireDepartmentIcon sx={{ fontSize: 30, color: '#b5739d' }} />
                                <Standard id="standard-basic" variant="standard"
                                    focused
                                    placeholder=""
                                    size="small" sx={{ width: '20ch' }} />
                            </div>
                        </div>
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
                    </Box>
                </div>
            </div>
        </div>
    );
}