import chief from './chief.jpg';
import './Profile.scss';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

interface profileInfo {
    info: {
        name: string;
        phone: string;
        email: string;
    }
}

function Profile(prop: profileInfo) {
    const { name, phone, email } = prop.info;
    
    return (
        <div className="profile">
            <div className='Edit'>
                <AutoAwesomeIcon />
            </div>
            <br />
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