import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import logo from '../../images/logo.jpg';
import SideBar from '../sidebar/SideBar';
import './menu.scss';

function Bagemenu(props:any) {

    const { userName } = props;
    console.log(userName)
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
        <div className="menu" id="outer-container">
            <div className="left">
                <div className='sideBar'>
                    <SideBar userName = {userName}/>
                </div>
                
                <div className='logo'>
                    <Link to={`/${userName}/MainScreen`}>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="searchbox">
                    <input type="text" placeholder="search for a recipe" />
                    <SearchIcon sx={{ fontSize: 30, color: '#b5739d' }} />
                </div>
            </div>
            <div className="right">
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <PersonIcon sx={{ fontSize: 40, color: '#b5739d' }} />
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
                    <MenuItem onClick={handleClose1}>
                        <Link to={`/${userName}`}> Profile</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/"> Logout</Link>
                    </MenuItem>
                </Menu>
            </div>
        </div>
    );
}

export default Bagemenu;