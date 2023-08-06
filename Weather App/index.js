const apiKey = '374daf1df3cc4956ace03352230608';

async function getWeatherData(location) {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}


function displayWeatherData(weatherData) {
  const weatherInfo = document.getElementById('weatherInfo');
  weatherInfo.innerHTML = `
    <h2>Weather for ${weatherData.location.name}, ${weatherData.location.country}</h2>
    <p>Current temperature: ${weatherData.current.temp_c}°C</p>
    <p>Weather condition: ${weatherData.current.condition.text}</p>
  `;
}

async function handleFormSubmit(event) {
  event.preventDefault();
  const location = document.getElementById('location').value;
  const weatherData = await getWeatherData(location);
  displayWeatherData(weatherData);
}


const weatherForm = document.getElementById('weatherForm');
weatherForm.addEventListener('submit', handleFormSubmit);
