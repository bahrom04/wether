const endpoint = "https://fastapi-versel-eta.vercel.app/2426803/api"


fetch(endpoint)

     .then(response => response.json())
     .then(response => {

          console.log(response)

         
          let pressure = response.pressure
          let current_time = response.current_time


          document.getElementById("weather__city").innerHTML = "Warrington"
          document.getElementById("time").innerHTML = current_time
          document.getElementById("pressure").innerHTML = `${pressure.toFixed(0)} hPa`


     })
     .catch(err => {
          console.log(err)
     })









// fetch(`https://fastapi-versel-eta.vercel.app/${city}`)

//      .then(response => response.json())
//      .then(response => {

//           console.log(response)

//           let city = response.data.name
//           let temp = response.data.main.temp - 273.15 // Kelvin to Celsius
//           let pressure = response.data.main.pressure


//           document.getElementById("weather__city").innerHTML = city
//           document.getElementById("temp").innerHTML = `${temp.toFixed(0)} °C`
//           document.getElementById("pressure").innerHTML = `Pressure: ${pressure.toFixed(0)} hPa`


//      })
//      .catch(err => {
//           console.log(err)
//      })
