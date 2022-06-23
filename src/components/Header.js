import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Link } from 'react-router-dom';
import routes from '../routes';

export default function Header() {
  return (
    <header>
      <img src="../images/logo.png" alt="Logo" className="header--img" />
      <h1 className="header--title"> Space Travelers Hub</h1>
      <ul className="header--project">
        {routes.map((route) => (
          <li key={route.id}>
            <Link to={route.path}>
              {route.title}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
