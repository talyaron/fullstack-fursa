import React from 'react'
import logo from './logo.svg'
import Modal from 'react-modal'
import { useState } from "react"
import Search from '../search/search'

//Modal.setAppElement('')
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
function Menu() {
    const [modalIsOpen, setModal] = useState(false);
    function openSearchModal(bool: boolean) {
        setModal(bool);
    }
    return (
        <div className="navbar">
            <div className="navbar__box">
                <div className="navbar__left">
                    <img src={logo} alt="Logo" />
                    <a href="#home">Explore</a>
                    <a href="#Reservation">Reservation</a>
                    <a href="#Favorite">Favorite</a>
                    <a href="#Maps">Maps</a>
                </div>
                <div className="navbar__right">
                    <button className="navbar__right__signup" type="button"><span>Not Registered Yet?</span></button>
                    <button className="navbar__right__signin" type="button">Sign in</button>
                    <img onClick={() => openSearchModal(true)} className="navbar__right__search" src="https://img.icons8.com/material-outlined/48/000000/search--v1.png" alt="search_icon" />
                </div>
            </div>
            <Modal className="Modal" isOpen={modalIsOpen} onRequestClose={() => openSearchModal(false)}>
                <div className="Modal__header">
                    <button className="Modal__header__closebtn" onClick={() => openSearchModal(false)}></button>
                </div>
                <div className="Modal__content">
                    <Search />
                </div>
            </Modal>
        </div>
    );

}
export default Menu;