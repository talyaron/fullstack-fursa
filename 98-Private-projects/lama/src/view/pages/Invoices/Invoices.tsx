import {Link} from 'react-router-dom';

//components
import Nav from '../../components/nav/Nav';

function Invoices(){
    return(
        <div>
            <Nav />
            <h1>Invoices</h1>
            <Link to='/expenses'>Go to expenses</Link>
        </div>
    )
}

export default Invoices;