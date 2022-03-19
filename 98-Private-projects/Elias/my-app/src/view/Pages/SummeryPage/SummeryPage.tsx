import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import WeatherReducer, { getWeather, getWeatherInfoAsync } from '../../../app/reducer/WeatherReducer';
import './SummeryPage.scss';


const SummeryPage = () => {
    const Weather = useAppSelector(getWeather);
    const dispatch = useAppDispatch();



useEffect(() => {
    dispatch(getWeatherInfoAsync("newyork"));
    console.log(Weather);
  }, [dispatch]);



    //const [PlaceOfTrip, setPlaceOfTrip] = useState("Weather")
    const [PlaceOfTrip, setPlaceOfTrip] = useState(Weather.WeatherInfo.CityNAme);
    return (
        <div className='wrapper'>
            <div className="travelheader">
                <div className="travelpic"></div>
                <div className="distantionName"></div>
                <div className="dateoftrip"></div>
                <div className="CompasIcon">
                </div>

            </div>
                <h3 className="funthings" >Fun things th know about {PlaceOfTrip}</h3>


        </div>
    )
}

export default SummeryPage;