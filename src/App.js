import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Missions from './components/Missions/Missions';
import RocketsPage from './pages/rockets';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<RocketsPage />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </div>
  );
}
