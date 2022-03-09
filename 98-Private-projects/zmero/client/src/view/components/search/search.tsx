import React, { useState } from 'react'
import './search.scss'
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

function Search() {
    const [searchProp, setSearchProp] = useState('Restaurant')
    function handleSearchProp(e: any) {
        console.log(e.target.value)
        setSearchProp(e.target.value)
    }

    return (
        <div className="searchDiv">
            <div className="searchDiv__bar">
                <h1 className="searchDiv__title">Find Your Table</h1>
                <div className="searchDiv__bar__content">
                    <div className="searchDiv__bar__content__a">
                        <input className="searchDiv__bar__content__a__input" type="text" placeholder=" Search For Food or Restaurant" name="search" />
                        <FormControl variant="filled" sx={{ backgroundColor: "white", minWidth: 120, maxHeight: '2.5rem', zIndex: 0 }}>
                            <InputLabel style={{ fontSize: '0.7rem' }} id="demo-simple-select-filled-label">Category</InputLabel>
                            <Select sx={{ height: "2.5rem", backgroundColor: "white" }}
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={searchProp}
                                onChange={handleSearchProp}
                            >
                                <MenuItem value={'Restaurant'}>Restaurant</MenuItem>
                                <MenuItem value={'Food'}>Food</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="searchDiv__bar__content__b">
                        <button className="searchDiv__bar__content__b__btn"> Search</button>
                    </div>
                </div>
            </div>
        </div >
    );

}

export default Search;