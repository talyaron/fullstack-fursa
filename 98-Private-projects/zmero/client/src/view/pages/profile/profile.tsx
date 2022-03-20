import React, { useEffect, useState } from "react";
import './profile.scss'
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { checkUser, selectUser, updateUserInfo, updatePassword, updatePasswordState } from "../../../app/reducers/userReducer";
import NavBar from '../../components/menu/menu'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";


function Profile() {
    const userInfo = useAppSelector(selectUser)
    const [expanded, setExpanded] = React.useState("");
    const [updatePass, setUpdatePass] = useState({ 'currentPass': "", "newPass": "" })
    const islogged = useAppSelector(checkUser);
    const updatepassState = useAppSelector(updatePasswordState)
    const [updatePersonal, setUpdatePersonal] = useState({})
    const [passError, setPassError] = useState(false);
    const dispatch = useAppDispatch()

    useEffect(() => {
        setUpdatePersonal(userInfo);
    }, [userInfo]);

    useEffect(() => {
        if (updatepassState == 'completed') {
            setPassError(false)
            setUpdatePass({ 'currentPass': "", "newPass": "" })
        }
        if (updatepassState == 'failed')
            setPassError(true)

    }, [updatepassState]);

    const handleChange = (panel: any) => (event: any, isExpanded: any) => {
        setExpanded(isExpanded ? panel : false);
    };
    function onChangeUpdatePersonal(e: any) {
        setUpdatePersonal({
            ...updatePersonal,
            [e.target.name]: e.target.value,
        })
    }
    function handleUpdatePersonal(e: any) {
        e.preventDefault();
        dispatch(updateUserInfo(updatePersonal))
    }
    function onChangeUpdatePass(e: any) {
        setUpdatePass({
            ...updatePass,
            [e.target.name]: e.target.value,
        })
    }
    function handleUpdatePass(e: any) {
        e.preventDefault();
        dispatch(updatePassword(updatePass))
    }
    let fullName = userInfo.fName.charAt(0).toUpperCase() + userInfo.fName.slice(1) + " " + userInfo.lName.charAt(0).toUpperCase() + userInfo.lName.slice(1)
    return (
        <div className="profile">
            <NavBar />
            <div className="profile__content">
                <div className="profile__content__title">
                    <h6>
                        Manage Profile</h6>
                </div>
                <div className="profile__content__tabs">
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '70%', flexShrink: 0 }}>
                                Personal details
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <form onSubmit={handleUpdatePersonal}>
                                <div className="profile__content__tabs__personal">
                                    <div className="profile__content__tabs__personal__1">
                                        <div className="profile__content__tabs__personal__1__fname">
                                            <TextField required key={islogged ? "fnameLoaded" : "fnameLoading"} defaultValue={userInfo.fName} fullWidth name="fName" label="First Name" variant="standard" onChange={onChangeUpdatePersonal} />
                                        </div>
                                        <div className="profile__content__tabs__personal__1__lname">
                                            <TextField required key={islogged ? "lnameLoaded" : "lnameLoading"} fullWidth defaultValue={userInfo.lName} name="lName" label="Last Name" variant="standard" onChange={onChangeUpdatePersonal} />
                                        </div>
                                    </div>
                                    <div className="profile__content__tabs__personal__2">
                                        <div className="profile__content__tabs__personal__2__phone">
                                            <TextField required key={islogged ? "phoneLoaded" : "phoneLoading"} fullWidth defaultValue={userInfo.phone} name="phone" label="Phone" variant="standard" onChange={onChangeUpdatePersonal} />
                                        </div>
                                        <div className="profile__content__tabs__personal__2__region">
                                            <FormControl fullWidth size="small" key={islogged ? "regionLoaded" : "regionLoading"}>
                                                <InputLabel id="region"  >Region</InputLabel>
                                                <Select MenuProps={{
                                                    disableScrollLock: true,
                                                }}
                                                    required
                                                    name="region"
                                                    key={islogged ? "regionLoadedseclect" : "regionLoadingselect"}
                                                    defaultValue={userInfo.region}
                                                    labelId="region"
                                                    id="demo-simple-select"
                                                    label="Region"
                                                    onChange={onChangeUpdatePersonal}
                                                >
                                                    <MenuItem value='Israel'>Israel</MenuItem>
                                                    <MenuItem value='USA'>USA</MenuItem>
                                                    <MenuItem value='UK'>UK</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                    </div>
                                    <Button variant="contained" style={{ marginTop: '1rem' }} type="submit">Update</Button>
                                </div>
                            </form>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography sx={{ width: '70%', flexShrink: 0 }}>
                                Change Password
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <form onSubmit={handleUpdatePass}>
                                <div className="profile__content__tabs__password">
                                    <div className="profile__content__tabs__password__1">
                                        <div className="profile__content__tabs__password__1__current">
                                            <TextField required value={updatePass.currentPass} fullWidth error={passError} helperText={passError == true ? 'Wrong pass' : ''} name="currentPass" label="Current Password" variant="standard" type="password" onChange={onChangeUpdatePass} />
                                        </div>
                                        <div className="profile__content__tabs__password__1__new">
                                            <TextField required value={updatePass.newPass} fullWidth name="newPass" label="New Password" variant="standard" type="password" onChange={onChangeUpdatePass} />
                                        </div>
                                    </div>
                                    <Button variant="contained" fullWidth style={{ marginTop: '1rem' }} type="submit">Change</Button>
                                </div>
                            </form>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div >
    )
}

export default Profile;

