import React from 'react';
import MenuAppBar from '../../Components/header/appBar';
import './profileInfo.scss';
import PhoneIcon from '@mui/icons-material/Phone';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { Link, useParams } from 'react-router-dom';

function ProfileInfo() {

    const {accidentId} = useParams();
    const info = { name: "Name", city: "some city", phone: " 0527-***-***" }
    const dispatch = useAppDispatch();
    const accident_ = useAppSelector(state => state.accident);

    console.log(accident_)

    return (
        <div className='profileInfo'>
            <MenuAppBar />
            <div className='userInfo'>
                <div className="content">
                    <h3>Profile Info</h3>
                    <p>Name : {accident_.value.user.name}</p>
                    <p>Gender: {accident_.value.user.gender}</p>
                    <p>Location: {accident_.value.user.location}</p>
                    <p>Phone Number: {accident_.value.user.phone}</p>
                </div >
                <br />
                <button>Go To Chat</button>
                <Link to={`/${accidentId}`}>
                    <button>Accident Info</button>
                </Link>
            </div>
            <PhoneIcon sx={{ paddingLeft: '40px', fontSize: 35 }} />
        </div>
    )
}

export default ProfileInfo;