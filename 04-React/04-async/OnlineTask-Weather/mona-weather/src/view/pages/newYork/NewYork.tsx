
import { Link } from 'react-router-dom';
import Card from '../../components/card/Card';
import './NewYork.scss'

function NewYork()
{
    return(
        <div className='newYork'>
            <button><Link to="/">home</Link></button>
        <Card cityName={'New York'}/>

        </div>
    );
}

export default NewYork