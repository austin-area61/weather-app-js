document.getElementById('search-btn').addEventListener('click', function() {
  const city = document.getElementById('search-input').value;
  fetchWeatherData(city);
});
