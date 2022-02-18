import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import './menu.scss';

function Bagemenu() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClose1 = () => {
        setAnchorEl(null);
    };

    return (
        <div className="menu">
            <div className="menu__left">
                <MenuIcon sx={{fontSize:40, color:'#b5739d', paddingTop:-30}}/>
                <div className='logo'>
                    <img src="https://thumbs.dreamstime.com/z/woman-enjoy-making-foods-girl-cooking-food-continuous-one-line-drawing-vector-illustration-kitchen-people-design-female-dinner-160458109.jpg" alt="" />
                </div>
                <div className="searchbox">
                    <input type="text" placeholder="search for a recipe" />
                    <SearchIcon sx={{ fontSize:30, color:'#b5739d'}}/>
                </div>
            </div>
            <div className="menu__right">
                <Button 
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <PersonIcon sx={{fontSize:40, color:'#b5739d'}}/>
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose1}>Profile</MenuItem>
                    <MenuItem>
                        <Link to="/"> Logout</Link>
                    </MenuItem>
                </Menu>
            </div>
        </div>
    );
}

export default Bagemenu;