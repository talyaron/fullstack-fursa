import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

export default function WebsiteMainPape() {
    return (
        <div>
            <Link to='/login'>
                <Button variant="outlined">Log in</Button>
            </Link>
            
            <Button variant="outlined">Register</Button>
        </div>
    );
}