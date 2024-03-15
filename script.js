const endpoint = `https://fastapi-versel-eta.vercel.app/2426803/api`


function handleResponse(response) {
     console.log(response);

     let time = response.current_time - 273.15;
     let pressure = response.pressure;

     document.getElementById("weather__city").innerHTML = "Warrington";
     document.getElementById("time").innerHTML = time;
     document.getElementById("pressure").innerHTML = `Pressure: ${pressure.toFixed(0)} hPa`;
}

// Check if JSONP is supported by the server
if ('fetch' in window) {
     fetch(`${endpoint}?callback=handleResponse`)
          .then(response => response.json())
          .catch(err => {
               console.log(err);
          });
} else {
     console.log("JSONP not supported.");
}









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
