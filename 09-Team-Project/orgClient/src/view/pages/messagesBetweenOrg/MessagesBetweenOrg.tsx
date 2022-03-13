import React, { useEffect, useState } from 'react'
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { Button } from '@material-ui/core';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { addNewSharingAsync, setSharing } from '../../../app/reducer/sharingReducer';
import './style.scss';
import axios from 'axios';
import MenuAppBar from '../../Components/header/appBar';
import Typography from '@mui/material/Typography';


function MessagesBetweenOrg() {
    const [org, setOrg] = useState<any>({});
    const [user, setUser] = useState<any>({});
    const [description, setDescription] = useState("");
    const [orgs, setOrgs] = useState([]);
    const [users, setUsers] = useState([]);


    const orgArr = ['org1', 'org2', 'org35'];
    const userArr = ['user1', 'user2', 'user3'];

    const selectedAccident = useAppSelector(state => state.accident)
    const currentUser = useAppSelector(state => state.orgUser)

    //---------------//
    // const currentUser = "";
    // const selectedAccident = null;
    //---------------//


    useEffect(() => {

        fetch('/messagesBetweemOrg/get-organizations')
            .then(res => res.json())
            .then(data => {
                setOrgs(data);
            }).catch(err => {
                console.error(err);
            })
    }, []);

    function handleOrgChange(ev: any) {
        ev.preventDefault();
        setOrg(ev.target.value);
        axios
            .post('/messagesBetweemOrg/get-Users-byOrgName', { orgName: ev.target.value.orgName })
            .then((res) => {
                const data = res.data;
                console.log(data);
                setUsers(data);
            }).catch(err => {
                console.error(err);
            })
    }

    const dispatch = useAppDispatch();
    function handleClick() {
        const newSharing = {
            from: currentUser.value, to: user.email, content: description,
            date: (new Date()).toJSON(), accident: selectedAccident.value,
        };
        console.log(newSharing);
        dispatch(setSharing(newSharing));
        dispatch(addNewSharingAsync(newSharing));
    }

    function handleDescription(ev: any) {
        setDescription(ev.target.value)
    }

    return (
        <div className='messagesBetweenOrgPageContent' >
            <MenuAppBar />
            <div className="info">
                <Typography className="text" variant="h6" align="center">
                    select organization and user to send them an accident
                </Typography>
                <Box className="box" sx={{ width: 200 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Pick Organization</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={org}
                            onChange={handleOrgChange}
                        >
                            {orgs.map((item: any, index) => {
                                return (
                                    <MenuItem key={index} value={item}>{item.orgName}</MenuItem>);
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
                            {users.map((item: any, index) => {
                                return (
                                    <MenuItem key={index} value={item}>{item.name}</MenuItem>);
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

