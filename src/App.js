import React, { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import {getWeatherData} from './components/weatherapi'

function App() {

  const [submitted, setSubmit] = useState(false);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState('');

  const getData = async () => {
    try {
      const data = await getWeatherData(location);
      setWeatherData(data.main.temp);
      console.log(data);
    } catch(error) {
      console.log(error);
    }
  }
  
  return (
    <div className="App">
       
      {!submitted &&
        <Welcome
        submitted={submitted}
        setSubmit={setSubmit}
        name={name}
        setName={setName}
        location={location}
        setLocation={setLocation} /> }

      {submitted && <Dashboard name={name} location={location} weatherData={weatherData}/>}

    </div>
  );
}

export default App;
