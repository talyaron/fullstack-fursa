import './Lonodon.scss'

interface LondonProps{
    weather:any;
    setWeather:any;
}
function London(props:LondonProps)
{
    const {weather,setWeather}=props
   

    return(
        <div className="london">
            {weather.current.temperature}
        </div>
    );
}

export default London