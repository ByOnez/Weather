const apikey = ("6e887ca436f6731c6354e94495c86a87");
const city = "Linhares"

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&appid=${apikey}`)
  .then(response => response.json())
  .then(data => {
    
    const kelvin = data.main.temp
    const celsius = kelvin - 273.15
    const weather = data.weather[0].main
    const humidity = data.main.humidity
    const wind = data.wind.speed  
    const windKmh = wind * 3.6

    let cityName = document.getElementById("city")
    let temperatureValue = document.getElementById("temperature")
    let weatherDescription = document.getElementById("weather")
    let humidityValue = document.getElementById("humidity")
    let windSpeed = document.getElementById("wind")

    cityName.innerHTML = city
    temperatureValue.innerHTML = (`${celsius.toFixed(0)}°C`)
    weatherDescription.innerHTML = (`${weather}`)
    humidityValue.innerHTML = (`Humidade ${humidity}%`)
    windSpeed.innerHTML = (`Vento ${windKmh.toFixed(0)}Km/h`)

  })
  .catch(error => console.error(error));

