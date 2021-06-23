import React, { useState} from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';

function App() {

  //const {name, setName} = useState('');
  //const {location, setLocation} = useState('');

  return (
    <div className="App">
     <Dashboard />
    </div>
  );
}

export default App;
