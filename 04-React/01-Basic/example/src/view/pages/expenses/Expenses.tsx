import {Link} from 'react-router-dom';

function Expenses(){
    return(
        <div>
            <h1>Expenses</h1>
            <Link to='/invoices'>Invoices</Link>
        </div>
    )
}

export default Expenses;