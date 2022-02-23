

import { Link } from 'react-router-dom';
import Card from '../../components/card/Card';
import './TelAviv.scss'
function TelAviv()
{
    return(
        <div className='telAviv'>
            <button><Link to="/">home</Link></button>
            <Card cityName={'Tel Aviv'}/>
        </div>
    );
}

export default TelAviv