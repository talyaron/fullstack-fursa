import {Link} from 'react-router-dom';

import Nav from '../../components/nav/Nav'

function Coats(){
    return(
        <div>
            <Nav />
            <div className="container">
                <div className="div">
                    1
                </div>
                <div className="div">
                    1
                </div>
                <div className="div">
                    1
                </div>
                <div className="div">
                    1
                </div>
            </div>
            <h1>Coats</h1>
            <Link to='/Coats'>Coats</Link>
        </div>
    )
}

export default Coats;