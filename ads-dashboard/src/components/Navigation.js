// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <h1>App Logo</h1>
      <ul>
        <li><Link to="/">DASHBOARD</Link></li>
        <li><Link to="/create-ad">CREATE ADS</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
