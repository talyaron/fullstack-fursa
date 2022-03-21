import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/navbar'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './profile.scss'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { fetchUser, getName, getGender } from '../../../app/reducer/userReducer';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import { Accordion, AccordionDetails, AccordionSummary, TextField, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Profile() {
    const userName = useAppSelector(getName)
    const userGender = useAppSelector(getGender)
    const [expanded, setExpanded] = React.useState("");
    const [updatePass, setUpdatePass] = useState({ 'currentPass': "", "newPass": "" })

    const handleChange = (panel: any) => (event: any, isExpanded: any) => {
        setExpanded(isExpanded ? panel : false);
    };
    function onChangeUpdatePass(e: any) {
        setUpdatePass({
            ...updatePass,
            [e.target.name]: e.target.value,
        })
    }
    const handleUpdatePass = (e: any) => {
        e.preventDefault()
        console.log(updatePass)
    }
    let gender = <MaleIcon style={{ color: "#3f51b5" }}></MaleIcon>
    if (userGender == "female")
        gender = <FemaleIcon style={{ color: "#FF69B4" }}></FemaleIcon>

    return (
        <div className="profile__main">
            <Navbar></Navbar>
            <div className="profile__main__photo">
                <img src="https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration-.jpg"></img>
            </div>
            <div className="profile__main__title">
                {gender}
                <h3>{userName}</h3>
            </div>
            <div className="profile__main__links">
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
                            <div className="profile__main__links__password">
                                <div className="profile__main__links__password__1">
                                    <div className="profile__main__links__password__1__current">
                                        <TextField required fullWidth name="currentPass" label="Current Password" variant="standard" type="password" onChange={onChangeUpdatePass} />
                                    </div>
                                    <div className="profile__main__links__password__1__new">
                                        <TextField required fullWidth name="newPass" label="New Password" variant="standard" type="password" onChange={onChangeUpdatePass} />
                                    </div>
                                </div>
                                <Button variant="contained" fullWidth style={{ marginTop: '1rem' }} type="submit">Change</Button>
                            </div>
                        </form>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}
export default Profile