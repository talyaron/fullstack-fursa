
import { Link } from "react-router-dom";
function Cities(){
    return(
        <nav>
        <Link to='/london'>london</Link>
        <Link to='/newYork'>New York</Link>
        <Link to='/telAviv'>Tel-Aviv</Link>

        <p>hii</p>
        </nav>
    );
}

export default Cities;