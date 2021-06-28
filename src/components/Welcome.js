import React from 'react';
import { getWeatherData } from './weatherapi';

const Welcome = ({submitted, setSubmit, name, setName, location, setLocation}) => {

    return (
        <div className='card'>
            <h1 className='title'>Welcome to <span>CoreWeather</span></h1>
            <h2 className='subTitle'>Give us your name and location</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    setSubmit(true);
                    console.log('form was submitted')
                }}>
                <div className='inputs'>
                    <input 
                        type='text'
                        name='Name' 
                        placeholder='Name'
                        value={name}
                        onChange={e => setName(e.target.value)}></input>
                    <input 
                        type='text' 
                        name='Location' 
                        placeholder='Location'
                        value={location}
                        onChange={(e) => {
                            setLocation(e.target.value)
                            console.log('The current location when subbmitted is', location);
                        }}
                        ></input>
                </div>
                    <button>Submit</button>
            </form>
        </div>
    )
}

export default Welcome
