import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import RocketsPage from './pages/rockets';
import MissionsPage from './pages/missions';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<RocketsPage />} />
        <Route path="/missions" element={<MissionsPage />} />
      </Routes>
    </div>
  );
}
