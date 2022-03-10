import React from 'react';
import './style.scss'
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { accident, findAccidentAsync, removeSelected } from '../../../app/reducer/accidentInfoReducer';

function ProfileInfo() {
// interface userIF {
//     userID?: Number,
//     name?: String,
//     email?: String,
//     password?: String,
//     phone?: String,
//     location?: String,
//     gender?: String,
//     type?: String,
//     org?: orgIF
// }
  const user = useAppSelector(accident).value.user;

    return (
        <div className='wrapper'>
      <div className='menu'>
        <HomeIcon sx={{ paddingLeft: '20px', fontSize: 35, paddingTop: '10px' }} />
        <SettingsIcon sx={{ float: 'right', fontSize: 35, paddingRight: '20px', paddingTop: '10px' }} />
      </div>
      
            <div className="profileInfo">
                <h1>{user.name}</h1>
                <div><p>EMAIL: {user.email}</p></div>
                  <div><p>PHONE NUMBER: {user.phone}</p></div>
                <div><p>LOCATION: {user.location}</p></div>
                  <div><p>GENDER: {user.gender}</p></div>
                             <div><p>TYPE: {user.type}</p></div>
            </div >
        </div>
    )
}

export default ProfileInfo;