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
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import User from '../user/user'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { checkUser, getUserInfoAsync, updateLogIn, selectUser } from '../../../app/reducers/userReducer'




Modal.setAppElement('#root')
function Menu() {
    const [modalSearchIsOpen, setSearchModal] = useState(false);
    const [modalSignInsOpen, setSignINModal] = useState(false);
    const [modalSignUpModal, setSignUpModal] = useState(false);
    const [navbarindex, setNavbarindex] = useState(1);
    const [loginState, setLoginState] = useState({})
    const [sigupState, setSigupnState] = useState({})
    const [openAlert, setOpenAlert] = React.useState(false);
    const dispatch = useAppDispatch();
    const isLoggedIn = useAppSelector(checkUser)
    const userInfo = useAppSelector(selectUser)
    function openSearchModal(bool: boolean) {
        if (bool === false)
            setNavbarindex(1)
        else setNavbarindex(0)
        setSearchModal(bool);
    }
    function openSignInModal(bool: boolean) {
        if (bool === false)
            setNavbarindex(1)
        else setNavbarindex(0)
        setSignINModal(bool);
    }
    function openSignUpModal(bool: boolean) {
        if (bool === false)
            setNavbarindex(1)
        else setNavbarindex(0)
        setSignUpModal(bool);
    }
    function onChangeLogIn(e: any) {
        setLoginState({
            ...loginState,
            [e.target.name]: e.target.value,
        })

    }

    function handleLogin(e: any) {
        e.preventDefault();
        openSignInModal(false);
        dispatch(getUserInfoAsync(loginState))
        setOpenAlert(true)
    }
    function onChangeSignup(e: any) {
        setSigupnState({
            ...sigupState,
            [e.target.name]: e.target.value,
        })
    }
    function handleSignup(e: any) {
        e.preventDefault();
        openSignUpModal(false)

    }
    let comp;
    if (isLoggedIn) {
        comp = <User></User>
    }
    else {
        comp = (<div className="navbar__right"><button className="navbar__right__signup" type="button" onClick={() => openSignUpModal(true)}><span>Not Registered Yet?</span></button>
            <button className="navbar__right__signin" type="button" onClick={() => openSignInModal(true)}>Sign in</button></div>)
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
                    < Link to="/">
                        Explore
                    </Link>
                    {isLoggedIn ?
                        <div className="navbar__left__links">
                            <Link to="/Reservations">
                                Reservation
                    </Link>
                            <Link to="/Favorite">
                                Favorite
                    </Link>
                            <Link to="/Maps">
                                Maps
                    </Link></div> : <div className="navbar__left__disable"> <span>Reservation</span><span>Favorite</span><span >Maps</span></div>
                    }
                </div>
                <div className="navbar__right">
                    {comp}
                    <img onClick={() => openSearchModal(true)} className="navbar__right__search" src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" alt="search_icon" />
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
                            <form onSubmit={handleLogin}>
                                <TextField required id="login__account" label="Account" name="email" variant="standard" onChange={onChangeLogIn} />
                                <TextField required id="login__password" label="Password" name="password" type="password" variant="standard" onChange={onChangeLogIn} />
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                                </FormGroup>
                                <Button variant="contained" type="submit" style={{ marginTop: '1rem' }} >Sign in</Button>
                            </form>
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
                            <form onSubmit={handleSignup}>
                                <TextField required name="fName" label="First Name" variant="standard" onChange={onChangeSignup} />
                                <TextField required name="lName" label="Last Name" variant="standard" onChange={onChangeSignup} />
                                <TextField required name="email" label="Email" variant="standard" onChange={onChangeSignup} />
                                <TextField required name="password" label="Password" type="password" variant="standard" onChange={onChangeSignup} />
                                <TextField required name="phone" label="Phone" variant="standard" onChange={onChangeSignup} />
                                <FormControl style={{ marginTop: '1rem' }} size="small" >
                                    <InputLabel id="region"  >Region</InputLabel>
                                    <Select MenuProps={{
                                        disableScrollLock: true,
                                    }}
                                        required
                                        name="region"
                                        defaultValue=''
                                        labelId="region"
                                        id="demo-simple-select"
                                        label="Region"
                                        onChange={onChangeSignup}
                                    >
                                        <MenuItem value='Israel'>Israel</MenuItem>
                                        <MenuItem value='USA'>USA</MenuItem>
                                        <MenuItem value='UK'>UK</MenuItem>
                                    </Select>
                                </FormControl>
                                <Button variant="contained" style={{ marginTop: '1rem' }} type="submit">Register</Button>
                            </form>
                        </div>
                    </div>
                </div>

            </Modal>
            <Snackbar sx={{ height: "100%" }}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }} open={openAlert} autoHideDuration={6000} onClose={() => setOpenAlert(false)}>
                <Alert onClose={() => setOpenAlert(false)} severity="success" sx={{ width: '100%' }}>
                    You have logged in Successfully!
                            </Alert>
            </Snackbar>
        </div >
    );

}
export default Menu;