import Rola from "../Images/Rola.jpeg";
import "./Header.scss";

function Header() {
  return (

    <div className="header">
      <div className="menu-icon">
        <span className="line" ></span>
        <span className="line" ></span>
      </div>
      <h3><span style={{color: '#ff4500'}}>
      Near Events 
        </span>  </h3>
      <div className="flex">
        <img src={Rola} />
      </div>
    </div>
  );
}

export default Header;
