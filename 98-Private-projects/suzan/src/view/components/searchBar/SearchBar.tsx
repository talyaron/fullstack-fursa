import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { Icon } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
  display: 'none',
});

function SearchBar() {

    const [sortPopup, setSortPopup] = useState(false);
    const [filterPopup, setFilterPopup] = useState(false);

    function sortPopUpMenu() {
        return (
          <ul className="popup">
            <li>first name</li>
            <li>last name</li>
            <li>id</li>
          </ul>
        );
      }

      function filterPopUpMenu() {
        return (
          <ul className="popup">
            <li>class</li>
            <li>status</li>
          </ul>
        );
      }

    return (
    <div className="searchBar">
        <input type="text" placeholder='search by name, phone, email ...'/>
        <SearchIcon className='searchIcon'></SearchIcon>
        <div className='sortby'>
            <button onClick={() => setSortPopup(!sortPopup)}>sort by</button>
            {sortPopup && sortPopUpMenu()}
        </div>
        <div className='filter'>
          <button onClick={() => setFilterPopup(!filterPopup)}>filter</button>
          {filterPopup && filterPopUpMenu()}
        </div>

        {/* <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
        <PhotoCamera />
        </IconButton>
        </label> */}
        
    </div>
    
    );
}

export default SearchBar;