import React from 'react';
import { Link } from 'react-router-dom';
import { ScreenPaths } from '../../screens/ScreenPaths';
import './Navbar.scss';

export default function Navbar() {
  return (
    <div className="navbar_container">
      <Link to={ScreenPaths.News}>
        <div className="navbar_icon"></div>
      </Link>
      <Link to={ScreenPaths.Schedule}>
        <div className="navbar_icon"></div>
      </Link>
      <Link to={ScreenPaths.Profile}>
        <div className="navbar_icon"></div>
      </Link>
    </div>
  );
}
