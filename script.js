// script.js
const API_KEY ='1ff76a82ee9d5bc2c0b60af19d028870'; // Replace with your OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById('cityInput').value;
  if (city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          displayWeather(data);
        } else {
          document.getElementById('weatherResult').innerHTML = '<p>City not found. Please try again.</p>';
        }
      })
      .catch(error => console.error('Error fetching weather data:', error));
  } else {
    document.getElementById('weatherResult').innerHTML = '<p>Please enter a city name.</p>';
  }
}

function displayWeather(data) {
  const weatherResult = `
    <h2>${data.name}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Weather: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
  `;
  document.getElementById('weatherResult').innerHTML = weatherResult;
}
