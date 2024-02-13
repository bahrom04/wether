const api_key = "00de3e3400f5ef50f02428295585eba5"
const city = "Bukhara"


fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)

     .then(response => response.json())
     .then(response => {

          console.log(response)

          let city = response.name
          let country = response.sys.country
          let temp = response.main.temp - 273.15 // Kelvin to Celsius
          let min_temp = response.main.temp_min - 273.15 // Kelvin to Celsius
          let max_temp = response.main.temp_max - 273.15 // Kelvin to Celsius
          let feels_like = response.main.feels_like - 273.15 // Kelvin to Celsius
          let wind = response.wind.speed
          let humidity = response.main.humidity
          let pressure = response.main.pressure


          document.getElementById("weather__city").innerHTML = city
          document.getElementById("weather__country").innerHTML = country
          document.getElementById("temp").innerHTML = `${temp.toFixed(0)} °C`
          document.getElementById("min").innerHTML = `min: ${min_temp.toFixed(0)} °C`
          document.getElementById("max").innerHTML = `max: ${max_temp.toFixed(0)} °C`
          document.getElementById("feels_like").innerHTML = `${feels_like.toFixed(0)} °C`
          document.getElementById("wind").innerHTML = `${wind.toFixed(0)} m/s`
          document.getElementById("humidity").innerHTML = `${humidity.toFixed(0)} %`
          document.getElementById("pressure").innerHTML = `${pressure.toFixed(0)} hPa`

          
     })
     .catch(err => {
          console.log(err)
     })
