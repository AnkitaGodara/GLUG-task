function searchWeather() {
  if (!navigator.onLine) {
    alert("You are offline. Please check your internet connection.");
    return;
  }

  const apiKey = 'cdcce8923c9cfc1d0967258077dbb75f'; 
  const city = document.getElementById('cityInput').value.trim();
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('City not found');
      }
      return response.json();
    })
    .then(data => {
      const cityName = data.name;
      const temperature = Math.round(data.main.temp - 273.15); 
      const description = data.weather[0].description;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;
      const visibility = data.visibility / 1000; 
      document.getElementById('city').textContent = cityName;
      document.getElementById('temperature').textContent = temperature + '°C';
      document.getElementById('description').textContent = description;
      document.getElementById('humidity').textContent = 'Humidity: ' + humidity + '%';
      document.getElementById('wind').textContent = 'Wind Speed: ' + windSpeed + ' m/s';
      document.getElementById('visibility').textContent = 'Visibility: ' + visibility + ' km';
    })
    .catch(error => {
      alert(error.message);
    });
}


