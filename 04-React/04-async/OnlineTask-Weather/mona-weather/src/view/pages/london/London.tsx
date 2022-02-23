import './Lonodon.scss'
import Card from '../../components/card/Card';
import { Link } from 'react-router-dom';

function London()
{
    

    return(
       
        <div className="london">
           
             <button><Link to='/'>home</Link></button>
       
           <Card cityName={'London'}/>
        </div>
    );
}

export default London