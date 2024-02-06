function fetchWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "4e83dd2b0449413387023542240602"; // WeatherAPI.com API key
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    // Make AJAX request
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = `
                <h2>Weather in ${data.location.name}, ${data.location.country}</h2>
                <p>Temperature: ${data.current.temp_c}°C</p>
                <p>Description: ${data.current.condition.text}</p>
                <p>Humidity: ${data.current.humidity}%</p>
            `;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}
