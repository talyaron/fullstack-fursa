import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './user.scss'
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import AssessmentIcon from '@mui/icons-material/Assessment';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { selecUserName, checkType, logOutUser } from '../../../app/reducers/userReducer'
import { useAppSelector, useAppDispatch } from '../../../app/hooks';

function User() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const userName = useAppSelector(selecUserName)
    const open = Boolean(anchorEl);
    const userType = useAppSelector(checkType)
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogOut = async () => {
        await dispatch(logOutUser())
        navigate("/");
    }
    function stringToColor(string: string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.substr(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }
    function stringAvatar(name: string) {
        if (name.length > 0) {
            return {
                sx: {
                    bgcolor: stringToColor(name),
                },
                children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
            };
        }
    }
    let adminPage;
    let addRestaurant;
    let addRestaurateur;
    if (userType === 'admin') {
        adminPage = (< Link to="/Admin"><MenuItem>
            <Avatar /> Admin
        </MenuItem></Link>)
        addRestaurant = (< Link to="/AddRestaurateur"><MenuItem>
            <ListItemIcon>
                <PersonAdd fontSize="small" />
            </ListItemIcon> Add Restaurant
        </MenuItem></Link>)
        addRestaurateur = (< Link to="/AddRestaurateur"><MenuItem>
            <ListItemIcon>
                <PersonAdd fontSize="small" />
            </ListItemIcon> Add Restaurateur
        </MenuItem></Link>)
    }
    let restaurateur
    if (userType == "restaurateur") {
        restaurateur = (< Link to="/Restaurateur"><MenuItem>
            <ListItemIcon>
                <AssessmentIcon fontSize="small" />
            </ListItemIcon> Restaurant Statistics
        </MenuItem></Link>)
    }
    return (
        <div className="user">
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar {...stringAvatar(userName)} sx={{ width: 32, height: 32 }}></Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                < Link to="/profile"><MenuItem>
                    <Avatar /> Profile
                </MenuItem></Link>
                {adminPage}
                <Divider />
                {addRestaurant}
                {addRestaurateur}
                {restaurateur}
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={handleLogOut}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </div >

    )
}

export default User