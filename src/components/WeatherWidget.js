//Компонент отвечает за отображение данных о погоде
import React from 'react';


const WeatherWidget = (props) => {
    const {weatherType, currentWeather, morningWeather, dayWeather, eveningWeather, nightWeather} = props
    return (
        <div style={{border: "1px dashed", margin: "2rem"}}>
            <img  style={{width: "10rem"}} src="https://cdn-icons-png.flaticon.com/512/1555/1555512.png" alt="weather" />
        </div>
    );
};

export default WeatherWidget;