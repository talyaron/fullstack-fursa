import {Link} from 'react-router-dom';

import Nav from '../../components/nav/Nav'

function Shirts(){
    return(
        <div>
            <Nav />
            <h1>Coats</h1>
            <Link to='/Shirts'>Shirts</Link>
        </div>
    )
}

export default Shirts;