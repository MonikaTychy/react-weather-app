import React from 'react';
import SearchEngine from './SearchEngine';
import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchEngine />
        <Weather />
      </div>
    </div>
  );
}


