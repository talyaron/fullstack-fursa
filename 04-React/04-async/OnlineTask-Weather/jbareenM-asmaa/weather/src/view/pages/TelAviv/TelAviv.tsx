import './TelAviv.scss';
import { useEffect, useState } from 'react';
import Card from '../../component/card/Card';

interface weather {
    current: { temperature: number; };
    location: { country: string };
}

function TelAviv() {
    // const [data, setData] = useState<weather>();
    // useEffect(() => {

    // }, [])
    return (
        <Card query="query=Tel Aviv" />
    );
}

export default TelAviv;