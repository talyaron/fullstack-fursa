import {Link} from 'react-router-dom';

function Invoices(){
    return(
        <div>
            <h1>Invoices</h1>
            <Link to='/expenses'>Go to expenses</Link>
        </div>
    )
}

export default Invoices;