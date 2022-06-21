import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Rockets from './components/Rockets/Rockets';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Rockets />} />
      </Routes>
    </div>
  );
}
