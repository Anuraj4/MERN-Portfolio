// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import '../App.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="back-link">Go Back to Home</Link>
    </div>
  );
};

export default NotFound;
