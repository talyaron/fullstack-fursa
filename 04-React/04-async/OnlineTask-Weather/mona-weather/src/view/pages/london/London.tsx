import './Lonodon.scss'

interface LondonProps{
    weather:any;
    setWeather:any;
}
function London(props:LondonProps)
{
    const {weather,setWeather}=props
    console.log(weather);

    return(
        <div className="london">
         lndon
        </div>
    );
}

export default London