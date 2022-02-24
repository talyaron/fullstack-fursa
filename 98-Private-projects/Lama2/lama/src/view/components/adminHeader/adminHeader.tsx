
import './adminHeader.scss';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Card from '../../components/card/Card';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import Nav from '../../components/nav/Nav';
import Nav from '../../components/nav/Nav';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


function AdminHeader() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        <Link to='/'></Link>
    };

    const handleClose1 = () => {
        setAnchorEl(null);
    };


    return (
        <div className="mainheader">
            {/* <div className="mainheader__box"> */}
            <div className="mainheader__left">

                <Link to="/">
                    courses 
                </Link>
                <Link to="/horses">
                    participants
                </Link>
            </div>
            <div className="mainheader__right">
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfyK_uZ7ZiiOIKc2i9NOiwn3fzsWWzc96ojA&usqp=CAU" />
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

                    <MenuItem>
                        <Link to="/SignIn"> SignIn</Link>  </MenuItem>

                    <MenuItem>   <Link to="/SignUp"> SignUp</Link>   </MenuItem>
                    <MenuItem>  <Link to="/SignIn"> Logout</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose1}>Close</MenuItem>
                </Menu>
            </div>
        </div>

        // </div>



    );
}

export default AdminHeader;