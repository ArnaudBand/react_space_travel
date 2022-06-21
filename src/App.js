import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Missions from './components/Missions/Missions';
import Rockets from './components/Rockets/Rockets';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </div>
  );
}
