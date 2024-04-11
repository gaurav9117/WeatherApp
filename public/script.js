document.getElementById('searchButton').addEventListener('click', async () => {
      const city = document.getElementById('locationInput').value;
      if (!city) {
          alert('Please enter a city');
          return;
      }
  
      try {
          const response = await fetch(`http://localhost:3000/weather?city=${city}`);
          const data = await response.json();
          displayWeatherData(data);
      } catch (error) {
          console.error(error);
          alert('Error fetching weather data');
      }
  });
  
  function displayWeatherData(data) {
      document.getElementById('location').textContent = data.location.name;
      document.getElementById('temperature').textContent = `Temperature: ${data.current.temp_c}°C`;
      document.getElementById('description').textContent = `Weather: ${data.current.condition.text}`;
  }
  