import React from 'react';
import {Link} from 'react-router-dom';
import menuImg from './menu.png';
import searchIcon from './search.jpg';
import userIcon from './user.png';
import logo from './logo.png';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './menu.scss';

function Bagemenu() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        <Link to='/invoices'>Invoices</Link>
    };

    const handleClose1 = () => {
        setAnchorEl(null);
    };

    return (
        <div className="menu">
            <div className="menu__left">
                <img src={menuImg} alt="logo" />
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="searchbox">
                    <img src={searchIcon} />
                    <input type="text" placeholder="search for a recipe" />
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
                    <img src={userIcon} />
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