import React, { useEffect, useState } from 'react'
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { Button } from '@material-ui/core';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { setSharing } from '../../../app/reducer/sharingReducer';
import './style.scss'


function MessagesBetweenOrg() {
    const [org, setOrg] = useState("");
    const [user, setUser] = useState("");
    const [description, setDescription] = useState("");
    const [orgs, setOrgs] = useState([]);
    const [users, setUsers] = useState([]);

    
    const orgArr = ['org1', 'org2', 'org35'];
    const userArr = ['user1', 'user2', 'user3'];

    // const selectedAccident = useAppSelector(sharedAccident)
    // const currentUser = useAppSelector(currentUser)

    //---------------//
    const currentUser = "";
    const selectedAccident = null;
    //---------------//

    
    useEffect(() => {

        fetch('/get-organizations')
        .then(res => res.json())
        .then(data => {
            setOrgs(data.data);
        }).catch(err => {
            console.error(err);
        })
    }, []);

    function handleOrgChange(ev:any) {
        setOrg(ev.target.value);
        fetch('/get-Users-byOrgName')
        .then(res => res.json())
        .then(data => {
            setUsers(data.data);
        }).catch(err => {
            console.error(err);
        })
    }

    const dispatch = useAppDispatch();
    function handleClick() {
        dispatch(setSharing({
            from: currentUser, to: user, content: description,
            date: new Date(), accident: selectedAccident,
        }))
    }

    function handleDescription (ev:any) {
        setDescription(ev.target.value)
    }

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
                            onChange={handleOrgChange}
                        >
                            {orgArr.map((item, index) => {
                                return (
                                    <MenuItem value={item}>{item}</MenuItem>);
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
                                    <MenuItem value={item}>{item}</MenuItem>);
                            })}
                        </Select>
                    </FormControl>
                </Box>
                <Box className="box" sx={{ width: 200 }}>
                    <FormControl fullWidth>
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            label="add description"
                            // rows={4}
                            onKeyUp={handleDescription}
                        />
                    </FormControl>
                </Box>
                <Button className="button" onClick={handleClick} variant="contained" >Send Meassage</Button>
            </div>
        </div>
    )
}

export default MessagesBetweenOrg;