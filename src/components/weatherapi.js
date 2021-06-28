import axios from 'axios';

const baseURL = 'api.openweathermap.org/data/2.5/weather?';
const apiKey = '1ca3ffa44bab23ba539a86f1546cd464'; 

export const getWeatherData = async (location) => {
    try {
        const data = await axios.get(baseURL + `&q=${location}&appid=${apiKey}&units=imperial`);
        console.log(data);
    } catch(error) {
        throw error;
    }
}