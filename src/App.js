import React, { useState} from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';

function App() {

  const [submitted, setSubmit] = useState(false);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  return (
    <div className="App">
      { !submitted &&
     <Welcome
     submitted={submitted}
     setSubmit={setSubmit}
     name={name}
     setName={setName}
     location={location}
     setLocation={setLocation} /> }
     {submitted && <Dashboard name={name} location={location}/>}
    </div>
  );
}

export default App;
