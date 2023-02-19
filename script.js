const searchBtn = document.querySelector(".search-btn");
const searchBar = document.querySelector(".search-bar");
const locationEl = document.querySelector(".location");
const dateEl = document.querySelector(".date");
const weatherIcon = document.querySelector(".weather-icon");
const temperatureEl = document.querySelector(".temperature");
const descriptionEl = document.querySelector(".description");

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(searchBar.value);
});

function getWeather(city) {
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`;

  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      locationEl.textContent = `${data.name}, ${data.sys.country}`;
      const date = new Date();
      dateEl.textContent = date.toLocaleDateString();
      temperatureEl.textContent = `${Math.round(data.main.temp)}°C`;
      descriptionEl.textContent = data.weather[0].description;

      const iconCode = data.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
      weatherIcon.src = iconUrl;
    });
}