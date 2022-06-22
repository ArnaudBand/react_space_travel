import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import routes from './routes';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} key={route.id} />
        ))}
      </Routes>
    </div>
  );
}
