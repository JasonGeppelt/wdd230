const apiKey = 'your_openweathermap_api_key';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Toloria&units=imperial&appid=${apiKey}`;

async function fetchWeather() {
    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();

        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

        document.getElementById('temperature').textContent = `${temperature}°F`;
        document.getElementById('description').textContent = description;
        document.getElementById('weather-icon').src = icon;
        document.getElementById('weather-icon').alt = description;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

fetchWeather();
