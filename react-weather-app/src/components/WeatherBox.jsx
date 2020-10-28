import React from 'react';
import styled from '../css/weatherbox.module.css'

const WeatherBox = (props) => {
    const dateBuilder = (d) => {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    
        return `${day} ${date} ${month} ${year}`
    
      }
      console.log(props.weather)
    return (
        <div className={styled.div}>
            {props.error && <p className={styled.error}>{props.error}</p>}  
            {props.icon && <img className={styled.img} src= {`http://openweathermap.org/img/w/${props.icon}.png`} alt= 'weather icon'/>}
            {props.city && <p className={styled.location}>{props.city}, {props.country}</p>}
            <p className={styled.date}>{dateBuilder(new Date())}</p>
            {props.weather && <p className={styled.weather}>{props.weather}</p>}  
            {props.temperature && <p className={styled.temp}>{Math.round(props.temperature)}°C</p>}              
        </div>
    );
};

export default WeatherBox;