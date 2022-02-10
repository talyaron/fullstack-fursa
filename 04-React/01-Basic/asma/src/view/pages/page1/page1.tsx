import {Link} from 'react-router-dom';

function Page1(){
    return(
        <div>
            <h1>Page1</h1>
            <Link to='/page2'>Click to go to page2!</Link>
        </div>
    )
}

export default Page1;