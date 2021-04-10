import React from 'react';
import './App.css';
import { LocationSearch } from './components/LocationSearch';
import { Topnav } from './components/Topnav';
import { Weather } from './components/Weather';

function App() {
  return (
    <div>
        <Topnav title="Weather" />
        <LocationSearch />
        <Weather />
    </div>
  );
}

export default App;
