import React from "react";
import logo from "./logo.svg";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

function Menu1() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="navbar">
      <div className="navbar__box">
        <div className="navbar__left">
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Categories
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>

          <nav role="navigation"></nav>
          <span>
            <img
              src="https://i.pinimg.com/originals/6f/dd/03/6fdd0381fb24566c13af151a9c5a9ddc.jpg"
              alt="Logo"
            />
          </span>
          {/* <a href="#home">Explore</a> */}
        </div>
        <div className="navbar__right">
          <button className="navbar__right__signup" type="button">
            <span>Shopping bag</span>
          </button>
          <a href="#home">help</a>
          <button className="navbar__right__signin" type="button">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
export default Menu1;
