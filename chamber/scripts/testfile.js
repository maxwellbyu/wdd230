const apiKey = '64c6f0e58fd83e676d52c24cd1691124'; // Replace with your OpenWeatherMap API key
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

async function getWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather').innerText = 'Failed to load weather data';
    }
}

function displayWeather(data) {
    const weatherElement = document.getElementById('weather');
    const weatherHtml = `
        <h2>${data.name}</h2>
        <p>${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
    weatherElement.innerHTML = weatherHtml;
}

getWeather();


