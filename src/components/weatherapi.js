import axios from 'axios';

const baseURL = 'https://api.openweathermap.org/data/2.5/weather?';
const apiKey = process.env.REACT_APP_WEATHER_API_KEY; 

export const getWeatherData = async (location) => {
    try {
        const getData = await axios.get(baseURL + `&q=${location}&appid=${apiKey}&units=imperial`);
        return getData;
        
    } catch(error) {
        throw error;
    }
}
