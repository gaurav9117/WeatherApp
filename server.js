const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
// server.js
// const { getWeatherData } = require('./app');

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a GET route for the root path
app.get('/', (req, res) => {
    res.status(200).send("Welcome to the Weather App backend!");
});

// Route to fetch weather data
app.get('/weather', async (req, res) => {
    const city = req.query.city;
    if (!city) {
        return res.status(400).send('City is required');
    }

    try {
        const weatherData = await getWeatherData(city);
        res.send(weatherData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching weather data');
    }
});


app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).json({ error: 'Internal Server Error' });
     });
     

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// Import the getWeatherData function from app.js
const { getWeatherData } = require('./app');
