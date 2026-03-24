const WMO_CODES = {
    0: { desc: "Clear sky", icon: "fas fa-sun", color: "#ffd700" },
    1: { desc: "Mainly clear", icon: "fas fa-cloud-sun", color: "#ffd700" },
    2: { desc: "Partly cloudy", icon: "fas fa-cloud-sun", color: "#ffd700" },
    3: { desc: "Overcast", icon: "fas fa-cloud", color: "#ffffff" },
    45: { desc: "Fog", icon: "fas fa-smog", color: "#ffffff" },
    48: { desc: "Depositing rime fog", icon: "fas fa-smog", color: "#ffffff" },
    51: { desc: "Light drizzle", icon: "fas fa-cloud-rain", color: "#87ceeb" },
    53: { desc: "Moderate drizzle", icon: "fas fa-cloud-rain", color: "#87ceeb" },
    55: { desc: "Dense drizzle", icon: "fas fa-cloud-rain", color: "#87ceeb" },
    61: { desc: "Slight rain", icon: "fas fa-cloud-showers-heavy", color: "#87ceeb" },
    63: { desc: "Moderate rain", icon: "fas fa-cloud-showers-heavy", color: "#87ceeb" },
    65: { desc: "Heavy rain", icon: "fas fa-cloud-showers-heavy", color: "#87ceeb" },
    71: { desc: "Slight snow fall", icon: "fas fa-snowflake", color: "#ffffff" },
    73: { desc: "Moderate snow fall", icon: "fas fa-snowflake", color: "#ffffff" },
    75: { desc: "Heavy snow fall", icon: "fas fa-snowflake", color: "#ffffff" },
    80: { desc: "Slight rain showers", icon: "fas fa-cloud-showers-water", color: "#87ceeb" },
    81: { desc: "Moderate rain showers", icon: "fas fa-cloud-showers-water", color: "#87ceeb" },
    82: { desc: "Violent rain showers", icon: "fas fa-cloud-showers-water", color: "#87ceeb" },
    95: { desc: "Thunderstorm", icon: "fas fa-bolt", color: "#ffd700" }
};

async function fetchWeather(lat, lon, locationName) {
    document.querySelector('.weather-card').style.opacity = '0.5';
    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.current_weather) {
            updateWeatherUI(locationName, data);
        }
    } catch (error) {
        console.error("Error fetching weather:", error);
        alert("Could not fetch weather data. Please try again.");
    } finally {
        document.querySelector('.weather-card').style.opacity = '1';
    }
}

function updateWeatherUI(locationName, data) {
    const current = data.current_weather;
    const wmo = WMO_CODES[current.weathercode] || WMO_CODES[0];

    document.getElementById('location-name').textContent = locationName;
    document.getElementById('current-temp').textContent = `${Math.round(current.temperature)}°C`;
    document.getElementById('weather-desc').textContent = wmo.desc;
    document.getElementById('humidity').innerHTML = `<i class="fas fa-wind"></i> Wind: ${current.windspeed} km/h`; // Open-meteo current doesn't always have humidity in simple call
    document.getElementById('wind-speed').innerHTML = `<i class="fas fa-compass"></i> Dir: ${current.winddirection}°`;

    const iconEl = document.getElementById('weather-icon');
    iconEl.className = wmo.icon;
    iconEl.style.color = wmo.color;

    const forecastGrid = document.getElementById('forecast-grid');
    forecastGrid.innerHTML = '';

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (let i = 0; i < 5; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        const dayName = days[date.getDay()];
        const code = data.daily.weathercode[i];
        const forecastWmo = WMO_CODES[code] || WMO_CODES[0];
        const maxTemp = Math.round(data.daily.temperature_2m_max[i]);

        const dayDiv = document.createElement('div');
        dayDiv.className = 'forecast-day';
        dayDiv.innerHTML = `
            <div>${dayName}</div>
            <i class="${forecastWmo.icon}" style="margin: 1rem 0; color: ${forecastWmo.color};"></i>
            <div style="font-weight: 800;">${maxTemp}°C</div>
        `;
        forecastGrid.appendChild(dayDiv);
    }

    // Dynamic advice based on weather
    let advice = "Ideal conditions for general field work.";
    if (current.weathercode >= 51) advice = "Rain expected. Delay fertilizer application and ensure proper drainage.";
    if (current.temperature > 35) advice = "High temperature. Increase irrigation frequency for sensitive crops.";

    document.getElementById('weather-advice').textContent = advice;
}

async function searchCity(city) {
    try {
        const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;
        const geoRes = await fetch(geoUrl);
        const geoData = await geoRes.json();

        if (geoData.results && geoData.results.length > 0) {
            const res = geoData.results[0];
            fetchWeather(res.latitude, res.longitude, `${res.name}, ${res.country_code.toUpperCase()}`);
        } else {
            alert("City not found.");
        }
    } catch (error) {
        console.error("Geocoding error:", error);
    }
}

function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            fetchWeather(position.coords.latitude, position.coords.longitude, "Your Location");
        }, () => {
            alert("Location access denied.");
        });
    } else {
        alert("Geolocation is not supported by your browser.");
    }
}

// Event Listeners
document.getElementById('search-btn').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    if (city) searchCity(city);
});

document.getElementById('city-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const city = document.getElementById('city-input').value;
        if (city) searchCity(city);
    }
});

document.getElementById('allow-location').addEventListener('click', () => {
    document.getElementById('location-modal').style.display = 'none';
    getCurrentLocation();
});

document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('location-modal').style.display = 'none';
});

// Initial Load
window.addEventListener('DOMContentLoaded', () => {
    // Default to Guntur
    fetchWeather(16.3067, 80.4365, "Guntur, AP");

    // Show location popup after a short delay
    setTimeout(() => {
        document.getElementById('location-modal').style.display = 'flex';
    }, 1000);
});
