import {Link} from 'react-router-dom';

import Nav from '../../components/nav/Nav'

function Coats(){
    return(
        <div>
            <Nav />
            <h1>Coats</h1>
            <Link to='/Coats'>Coats</Link>
        </div>
    )
}

export default Coats;