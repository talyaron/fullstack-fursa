import {Link} from 'react-router-dom';

import Nav from '../../components/nav/Nav'

function Expenses(){
    return(
        <div>
            <Nav />
            <h1>Expenses</h1>
            <Link to='/invoices'>Invoices</Link>
        </div>
    )
}

export default Expenses;