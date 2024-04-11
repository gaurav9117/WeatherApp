
// Function to fetch weather data
async function getWeatherData(city) {
      const apiKey = ""; // Replace with your actual API key from WeatherAPI.com
      const weatherURL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
      try {
          const { default: fetch } = await import('node-fetch');
          const response = await fetch(weatherURL);
          const weatherData = await response.json();
          return weatherData;
      } catch (error) {
          console.log("Error fetching weather data:", error);
          throw error;
      }
  }
  
  // Example usage
  getWeatherData("Mumbai")
      .then((data) => {
          console.log(data); // Display the weather data for Mumbai
      })
      .catch((error) => {
          console.error(error);
      });

      // app.js
module.exports = {
      getWeatherData
     };
     
  