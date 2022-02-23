import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { Icon } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


function SearchBar() {
    return (
    //     <InputBase
    //     sx={{ ml: 1, flex: 1 }}
    //     placeholder="Search Google Maps"
    //     inputProps={{ 'aria-label': 'search google maps' }}
    //   />
    <div className="searchBar">
        <input type="text" />
        <SearchIcon className='searchIcon'></SearchIcon>
    </div>
    
    );
}

export default SearchBar;