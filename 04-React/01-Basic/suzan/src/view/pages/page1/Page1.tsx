import { Link } from "react-router-dom";

function Page1() {
    return (
        <div>
            <h1>page 1</h1>
            <Link to='/page2'>go to page 2</Link>
            <Link to='/'>go to main page</Link>
        </div>
    );
}

export default Page1;