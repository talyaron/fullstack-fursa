import edit from './edit.png';
import chief from './chief.jpg';

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
            <img src={edit} alt="" />
            <div className="profileImg">
                <img src={chief} alt="" />
            </div>
            <p><span> Name : </span> {name}</p>
            <p> <span>  Phone number : </span> {phone}</p>
            <p> <span>  E-mail : </span> {email}</p>
        </div>
    );
}

export default Profile;