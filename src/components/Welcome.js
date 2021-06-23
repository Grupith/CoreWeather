import React from 'react';

const Welcome = () => {

    return (
        <div className='card'>
            <h1 className='title'>Welcome to <span>CoreWeather</span></h1>
            <h2 className='subTitle'>Give us your name and location</h2>
            <form>
            <div className='inputs'>
            <input type='text' name='Name' placeholder='Name'></input>
            <input type='text' name='Location' placeholder='Location'></input>
            </div>
            <button>Submit</button>
            </form>
        </div>
    )
}

export default Welcome
