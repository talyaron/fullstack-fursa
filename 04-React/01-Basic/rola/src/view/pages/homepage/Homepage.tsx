import {Link} from 'react-router-dom';
import Nav from '../../components/nav/Nav'

function Homepage(){
    return(
        <div>
            <Link to='/login'>LOG IN</Link>
        </div>
    )
}

export default Homepage;