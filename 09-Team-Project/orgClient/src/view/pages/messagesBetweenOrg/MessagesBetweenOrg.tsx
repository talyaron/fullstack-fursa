import React, { useEffect, useState } from 'react'
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { Button } from '@material-ui/core';

function MessagesBetweenOrg() {
    const [org, setOrg] = useState("");
    const [user, setUser] = useState("");

    const orgArr = ['org1', 'org2', 'org3'];
    const userArr = ['user1', 'user2', 'user3'];

    function handleClick() { }

    return (
        <div className='container' >
            <div className="info">
                <Box className="box" sx={{ width: 200 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Pick Organization</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={org}
                            onChange={(e) => setOrg(e.target.value as string)}
                        >
                            {orgArr.map((item, index) => {
                                return (
                                    <MenuItem value="org">{item}</MenuItem>                                );
                            })}

                        </Select>
                    </FormControl>
                </Box>
                <Box className="box" sx={{ width: 200 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Pick User</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={user}
                            onChange={(e) => setUser(e.target.value as string)}
                        >
                            {userArr.map((item, index) => {
                                return (
                                    <MenuItem value="user">{item}</MenuItem>                                );
                            })}
                        </Select>
                    </FormControl>
                </Box>
                <Button className="button" onClick={handleClick} variant="contained" >Send Meassage</Button>
            </div>
        </div>
    )
}

export default MessagesBetweenOrg;