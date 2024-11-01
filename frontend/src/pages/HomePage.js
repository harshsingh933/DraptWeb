import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to Voice Legal Drafting</h1>
      <Link to="/editor">Start Drafting</Link>
    </div>
  );
}

export default HomePage;
