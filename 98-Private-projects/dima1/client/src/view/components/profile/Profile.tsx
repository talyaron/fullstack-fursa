import chief from './chief.jpg';
import './Profile.scss';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';

interface profileInfo {
    info: {
        name: string;
        phone: string;
        email: string;
    }
}

function Profile(prop: profileInfo) {
    const[edit, setEdit] = useState(false);
    const { name, phone, email } = prop.info;
    
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
            <p><span> Name : </span> {name}</p>
            <p><span>  Phone number : </span> {phone}</p>
            <p><span>  E-mail : </span> {email}</p>
        </div>
    );
}

export default Profile;