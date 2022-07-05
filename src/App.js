import React from 'react';
import SearchEngine from './SearchEngine';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchEngine defaultCity="Gdynia"/>
      </div>
    </div>
  );
}


