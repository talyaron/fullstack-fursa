import menuImg from './menu.png';
import searchIcon from './search.jpg';
import userIcon from './user.png';
import logo from './logo.png';
import { useState } from 'react';
import Popup from '../Popup/Popup';

function Bagemenu() {
    const [isOpen, setIsOpen] = useState(false);

    function HandlePopup(ev: any) {
        setIsOpen(!isOpen);
    }
    return (
        <div className="menu">
            <div className="menu__left">
                <img src={menuImg} alt="logo" />
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="searchbox">
                    <img src={searchIcon} onClick={HandlePopup} />
                    <input type="text" placeholder="search for a recipe" />
                    {isOpen && <Popup content={"We will help you find the recipe you looking for"} handleClose={HandlePopup}/>}
                </div>
            </div>
            <div className="menu__right">
                <img src={userIcon} alt="" />
            </div>
        </div>
    );
}

export default Bagemenu;