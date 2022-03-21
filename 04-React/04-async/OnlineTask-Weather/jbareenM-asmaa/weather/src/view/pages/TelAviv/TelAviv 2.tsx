import './TelAviv.scss';
import { useEffect, useState } from 'react';
import Card from '../../component/card/Card';
import Home from '../Home/Home';

interface weather {
    current: { temperature: number; };
    location: { country: string };
}

function TelAviv() {
    // const [data, setData] = useState<weather>();
    // useEffect(() => {

    // }, [])
    return (

        <div>
            <Home/>
            <div>
                <Card query="query=Tel Aviv" />
            </div>
        </div>

    );
}

export default TelAviv;