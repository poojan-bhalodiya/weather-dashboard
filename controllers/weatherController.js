// weatherController.js

const axios = require('axios');

const getWeather = async (req, res) => {
  try {
    const apiKey = 'b9964dac31de53b376e59097f8d3d397';
    const city = req.query.city || 'New York';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await axios.get(apiUrl);
    const weatherData = response.data;

    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
};

module.exports = getWeather;
