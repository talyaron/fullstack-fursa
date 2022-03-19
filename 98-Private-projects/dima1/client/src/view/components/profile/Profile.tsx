import chief from './chief.jpg';
import './Profile.scss';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';

function Profile(props:any) {
    const[edit, setEdit] = useState(false);
    const { userInfo } = props;
    
    return (
        <div className="profile">
            <Tooltip title='edit profile'>
                <div className='Edit'>
                    <AutoAwesomeIcon sx={{fontSize:40}}/>
                </div>
            </Tooltip>
            
            <div className="profileImg">
                <img src={chief} alt="" />
            </div>
            <p><span> Name : </span> {userInfo.name}</p>
            <p><span>  Phone number : </span> {userInfo.phone}</p>
            <p><span>  E-mail : </span> {userInfo.email}</p>
        </div>
    );
}

export default Profile;