import React from 'react';
import './App.css';
import { LocationSearch } from './features/location-search/LocationSearch';
import { Weather } from './features/weather/Weather';

function App() {
  return (
    <div className="App">
        <LocationSearch />
        <Weather />
    </div>
  );
}

export default App;
