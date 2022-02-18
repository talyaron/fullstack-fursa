import React from 'react'
import logo from './logo.svg'
import Lock from './lock.svg'
import Modal from 'react-modal'
import { useState } from "react"
import Search from '../search/search'
import './menu.scss'
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'



Modal.setAppElement('#root')
function Menu() {
    const [modalSearchIsOpen, setSearchModal] = useState(false);
    const [modalSignInsOpen, setSignINModal] = useState(false);
    const [modalSignUpModal, setSignUpModal] = useState(false);
    const [navbarindex, setNavbarindex] = useState(1);
    function openSearchModal(bool: boolean) {
        if (bool == false)
            setNavbarindex(1)
        else setNavbarindex(0)
        setSearchModal(bool);
    }
    function openSignInModal(bool: boolean) {
        if (bool == false)
            setNavbarindex(1)
        else setNavbarindex(0)
        setSignINModal(bool);
    }
    function openSignUpModal(bool: boolean) {
        if (bool == false)
            setNavbarindex(1)
        else setNavbarindex(0)
        setSignUpModal(bool);
    }
    return (
        <div className="navbar" style={{ zIndex: navbarindex }}>
            <div className="navbar__box">
                <div className="navbar__left">
                    <div className="navbar__bar">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <div className="navbar__left__logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <Link to="/">
                        Explore
                    </Link>
                    <Link to="/Reservations">
                        Reservation
                    </Link>
                    <Link to="/Favorite">
                        Favorite
                    </Link>
                    <Link to="/Maps">
                        Maps
                    </Link>
                </div>
                <div className="navbar__right">
                    <button className="navbar__right__signup" type="button" onClick={() => openSignUpModal(true)}><span>Not Registered Yet?</span></button>
                    <button className="navbar__right__signin" type="button" onClick={() => openSignInModal(true)}>Sign in</button>
                    <img onClick={() => openSearchModal(true)} className="navbar__right__search" src="https://img.icons8.com/material-outlined/48/000000/search--v1.png" alt="search_icon" />
                </div>
            </div>
            <Modal className="Modal" isOpen={modalSearchIsOpen} onRequestClose={() => openSearchModal(false)}>
                <div className="Modal__header">
                    <button className="Modal__header__closebtn" onClick={() => openSearchModal(false)}></button>
                </div>
                <div className="Modal__content">
                    <Search />
                </div>
            </Modal>
            <Modal className="signModal" isOpen={modalSignInsOpen} onRequestClose={() => openSignInModal(false)}>
                <div className="signModal__content">
                    <div className="signModal__content__left">

                    </div>
                    <div className="signModal__content__right">
                        <div className="signModal__content__right__title">
                            <img src={Lock} alt="lock"></img>
                            <h3>Sign In</h3>
                        </div>
                        <div className="signModal__content__right__middle">
                            <TextField style={{ width: '50%' }} id="standard-basic" label="Account" variant="standard" />
                            <TextField id="standard-basic" style={{ width: '50%' }} label="Password" variant="standard" />
                            <Button variant="contained" style={{ width: '50%', margin: '1rem' }} >Sign in</Button>
                        </div>
                        <div className="signModal__content__right__bottom"></div>
                    </div>
                </div>
            </Modal>
            <Modal className="signModal" isOpen={modalSignUpModal} onRequestClose={() => openSignUpModal(false)}>
                <div className="signModal__content">
                    <div className="signModal__content__leftUp">

                    </div>
                    <div className="signModal__content__right">
                        <div className="signModal__content__right__title">
                            <h3>Sign up</h3>
                        </div>
                        <div className="signModal__content__right__middle">
                            <TextField style={{ width: '50%' }} id="standard-basic" label="Full Name" variant="standard" />
                            <TextField id="standard-basic" style={{ width: '50%' }} label="Email" variant="standard" />
                            <TextField id="standard-basic" style={{ width: '50%' }} label="Password" variant="standard" />
                            <TextField id="standard-basic" style={{ width: '50%' }} label="Phone" variant="standard" />
                            <FormControl style={{ width: '50%', marginTop: '1rem' }} size="small" >
                                <InputLabel id="region" >Region</InputLabel>
                                <Select MenuProps={{
                                    disableScrollLock: true,
                                }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Region"
                                >
                                    <MenuItem value={10}>Israel</MenuItem>
                                    <MenuItem value={20}>USA</MenuItem>
                                    <MenuItem value={30}>UK</MenuItem>
                                </Select>
                            </FormControl>
                            <Button variant="contained" style={{ width: '50%', margin: '1rem' }} >Register</Button>
                        </div>
                    </div>
                </div>

            </Modal>
        </div >
    );

}
export default Menu;