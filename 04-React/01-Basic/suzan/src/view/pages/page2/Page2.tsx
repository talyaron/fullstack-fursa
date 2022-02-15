import { Link } from "react-router-dom";

function Page2() {
    return (
        <div>
            <h1>page 2</h1>
            <Link to='/page1'>go to page 1</Link>
        </div>
    );
}

export default Page2;