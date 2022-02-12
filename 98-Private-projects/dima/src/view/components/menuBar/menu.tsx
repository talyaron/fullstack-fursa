import menuImg from './menu.png';
import searchIcon from './search.jpg';
import userIcon from './user.png';
import logo from './logo.png';

function Bagemenu() {
    
    return (
        <div className="menu">
            <div className="menu__left">
                <img src={menuImg} alt="logo" />
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="searchbox">
                    <img src={searchIcon}/>
                    <input type="text" placeholder="search for a recipe" />
                </div>
            </div>
            <div className="menu__right">
                <img src={userIcon} alt="" />
            </div>
        </div>
    );
}

export default Bagemenu;