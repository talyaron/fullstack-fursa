import {Link} from 'react-router-dom';


interface cityProp{
    setCity:any;
    city:any;
}

export default function Bar(prop:cityProp){
    const{city,setCity} = prop;

    function handleCity1(){
        setCity("New York");
    }
    function handleCity2(){
        setCity("Tel Aviv");
    }
    function handleCity3(){
        setCity("London");
    }

    return(
        <div>
          
            <Link to="/TelAviv">
                <button onClick={handleCity2}>Tel-Aviv</button>
            </Link>
            <Link to="/London">
                <button onClick={handleCity3}>London</button>
            </Link>
            <Link to="/NewYork">
                <button onClick={handleCity1}>New York</button>
            </Link>
        </div>
    )
}