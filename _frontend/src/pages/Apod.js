import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Apod = () => {
  const [apod, setApod] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/apod`)
      .then(res => setApod(res.data))
      .catch(() => alert('Failed to fetch APOD'));
  }, []);

  return apod ? (
    <div>
      <h2>{apod.title}</h2>
      <img src={apod.url} alt={apod.title} style={{ maxWidth: '100%' }} />
      <p>{apod.explanation}</p>
    </div>
  ) : <p>Loading...</p>;
};

export default Apod;