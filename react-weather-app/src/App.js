import React, { Component } from 'react';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import WeatherBox from './components/WeatherBox';
import './App.css';

const apiKey = '37363ff4d615d492c9f2edeb7490d7e9';


class App extends Component {
  state = {
    temperature: '',
    city: '',
    country: '',
    weather: '',
    icon: '',
    error: ''
  }
  
  getWeather = async (e) => {
    const city = e.target.elements.city.value;
    e.preventDefault();
    const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    const response = await apiCall.json();
    if(city && response.main !== undefined){
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        weather: response.weather[0].main,
        icon: response.weather[0].icon,
        error: ''
      })
    }else{
      this.setState({
        error: 'Please enter a valid city or town...'
      })
    }
  }
  render() {
    let conditionalClassName = 'App'
  if(this.state.temperature > 20){
    conditionalClassName = 'App-warm'
  }
    return (
      <div className={conditionalClassName} >
        <Header/>
        <SearchBox sendWeather={this.getWeather}/>
        <WeatherBox
          city={this.state.city} 
          country={this.state.country} 
          temperature={this.state.temperature} 
          weather={this.state.weather} 
          icon={this.state.icon}
          error={this.state.error}/>
      </div>
    );
  }
}

export default App;
