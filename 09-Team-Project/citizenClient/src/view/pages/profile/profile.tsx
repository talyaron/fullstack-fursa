import React from 'react'
import Navbar from '../../components/navbar/navbar'
import './profile.scss'
function Profile() {
    return (
        <div className="profile__main">
            <Navbar></Navbar>
            <div className="profile__main__photo">
                <img src="https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration-.jpg"></img>
            </div>
            <div className="profile__main__title">
                <h3>Name</h3>
            </div>
        </div>
    )
}
export default Profile