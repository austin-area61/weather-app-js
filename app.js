document.getElementById('search-btn').addEventListener('click', function() {
  const city = document.getElementById('search-input').value;
  fetchWeatherData(city);
});
function fetchWeatherData(city) {
  const apiKey = '5ea84661f674d77fcd0e68b11d6a7464'; //API KEY
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