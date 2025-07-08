import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>NASA Data Explorer</h1>
    <Link to="/apod">Astronomy Picture of the Day</Link>
  </div>
);

export default Home;