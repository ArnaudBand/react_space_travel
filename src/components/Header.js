import React from 'react';
import './Header.css';
import routes from '../routes';

export default function Header() {
  return (
    <header>
      <img src="../images/logo.png" alt="Logo" className="header--img" />
      <h1 className="header--title"> Space Travelers Hub</h1>
      <ul className="header--project">
        {routes.map((route) => (
          <li key={route.id}>
            <a href={route.path}>{route.title}</a>
          </li>
        ))}
      </ul>
    </header>
  );
}
