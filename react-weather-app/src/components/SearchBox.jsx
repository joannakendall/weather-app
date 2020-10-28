import React from 'react';
import styled from '../css/searchbox.module.css'

const SearchBox = (props) => {
    return (
        <form onSubmit = {props.sendWeather}>
          <input className={styled.input}
            type='text'
            name='city'
            placeholder='Enter a city or town...'
          />
          <button className={styled.button}>Get Weather</button>
        </form>
    );
};

export default SearchBox;