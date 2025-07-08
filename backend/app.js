const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const apod = require('./routes/apod');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/apod', apod);

module.exports = app;