import {Link} from 'react-router-dom';

import Nav from '../../components/nav/Nav'
    
function Second(){
    return(
        <div>
            <Nav />
            <Link to='/homepage'> Return to HOME PAGE </Link>    
            <br />
            <br />
            <Link to='/store'>Go To Store</Link>
                  
        </div>
    )
}

export default Second;