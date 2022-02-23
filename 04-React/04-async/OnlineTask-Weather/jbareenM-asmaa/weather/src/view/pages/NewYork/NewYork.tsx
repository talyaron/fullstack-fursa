import './NewYork.scss';
import Card from '../../component/card/Card';
import Home from '../Home/Home';

function NewYork(){
    return (
        <div>
            <Home/>
            <div>
                <Card query="query=New York" />
            </div>
        </div>
    );
}

export default NewYork;
