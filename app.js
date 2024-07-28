document.getElementById('search-btn').addEventListener('click', function() {
  const city = document.getElementById('search-input').value;
  fetchWeatherData(city);
});

function fetchWeatherData(city) {
  const apiKey = '5ea84661f674d77fcd0e68b11d6a7464'; // API KEY
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      displayWeatherData(data);
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}

function displayWeatherData(data) {
  const city = data.name;
  const country = data.sys.country;
  const temperature = data.main.temp;
  const condition = data.weather[0].description;
  const icon = data.weather[0].icon;
  const date = new Date().toLocaleDateString(); // Corrected "Date"

  document.getElementById('city').textContent = `${city}, ${country}`;
  document.getElementById('date').textContent = date;
  document.getElementById('temperature').textContent = `${temperature} °C`;
  document.getElementById('condition').textContent = condition.charAt(0).toUpperCase() + condition.slice(1);
  document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  document.getElementById('weather-icon').alt = condition;
}
