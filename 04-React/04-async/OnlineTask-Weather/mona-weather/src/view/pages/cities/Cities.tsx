
import { Link } from "react-router-dom";
function Cities(){
    return(
        <nav>
        <div>
        <Link to='/london'>london</Link>
        </div>
        <div>
        <Link to='/newYork'>New York</Link>
        </div>
        <div>
        <Link to='/telAviv'>Tel-Aviv</Link>
        </div>
        </nav>
    );
}

export default Cities;