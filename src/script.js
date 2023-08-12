const apikey = "8c10597313775f5b4020538716c600ff";
let defaultCity = "São Paulo"; 

document.addEventListener("DOMContentLoaded", function() {
  let searchCity = document.getElementById("searchCity");
  let city = defaultCity; 

  function updateInterface(data) {
    const { main: { temp: kelvin, humidity }, weather: [{ main: weather }], wind: { speed: wind } } = data;
    const celsius = kelvin - 273.15;
    const windKmh = wind * 3.6;

    let cityName = document.getElementById("city");
    let temperatureValue = document.getElementById("temperature");
    let weatherDescription = document.getElementById("weather");
    let humidityValue = document.getElementById("humidity");
    let windSpeed = document.getElementById("wind");

    cityName.innerHTML = city.toUpperCase();
    temperatureValue.innerHTML = `${celsius.toFixed(0)}°C`;
    weatherDescription.innerHTML = `${weather}`;
    humidityValue.innerHTML = `Humidade ${humidity}%`;
    windSpeed.innerHTML = `Vento ${windKmh.toFixed(0)} Km/h`;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&appid=${apikey}`)
    .then(response => response.json())
    .then(data => {
      updateInterface(data);
    })
    .catch(error => console.error(error));

  searchCity.addEventListener("input", function() {
    city = searchCity.value.trim();
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&appid=${apikey}`)
      .then(response => response.json())
      .then(data => {
        updateInterface(data);
      })
      .catch(error => console.error(error));
  });
});