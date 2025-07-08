const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  const date = req.query.date;
  try {
    const { data } = await axios.get(`https://api.nasa.gov/planetary/apod`, {
      params: {
        api_key: process.env.NASA_API_KEY,
        date
      }
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch APOD' });
  }
});

module.exports = router;