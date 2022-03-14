import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/navbar'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './profile.scss'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { fetchUser, getName, getGender } from '../../../app/reducer/userReducer';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';

function Profile() {
    const userName = useAppSelector(getName)
    const userGender = useAppSelector(getGender)
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
                <Button fullWidth style={{ backgroundColor: "white", color: "#3f51b5" }} variant="contained" endIcon={<SendIcon style={{ position: "absolute", right: "4", top: "10" }} />}>
                    Manage Accidents
                </Button>
                <Button fullWidth style={{ backgroundColor: "white", color: "#3f51b5", marginTop: "0.1rem" }} variant="contained" endIcon={<SendIcon style={{ position: "absolute", right: "4", top: "10" }} />}>
                    settings
                </Button>
            </div>
        </div>
    )
}
export default Profile