import './London.scss';
import Card from '../../component/card/Card';
import Home from '../Home/Home';

function London(){
    return (
        <div>
            <Home/>
            <div>
                <Card query="query=London" />
            </div>
        </div>
    );
}

export default London;
