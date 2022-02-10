import {Link} from 'react-router-dom';

function Page2(){
    return(
        <div>
            <h1>Page2</h1>
            <Link to='/page1'>Click to go to page1!</Link>
        </div>
    )
}

export default Page2;