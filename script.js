// Api from FastApi backend
// frontend github: https://github.com/bahrom04/wether/tree/weather-app
// backend github: https://github.com/bahrom04/fastapi-versel
const endpoint = "https://fastapi-versel-eta.vercel.app/2426803/api"


// Function to fetch data from API and update cache
function fetchDataAndUpdateCache() {
     fetch(endpoint)
          .then(response => response.json())
          .then(response => {
               console.log(response);

               let pressure = response.pressure;
               let current_time = response.current_time;
               document.getElementById("weather__city").innerHTML = "Warrington";
               document.getElementById("time").innerHTML = current_time;
               document.getElementById("pressure").innerHTML = `${pressure.toFixed(0)} hPa`;

               // Cache the data in localStorage
               localStorage.setItem("weatherData", JSON.stringify(response));
          })
          .catch(err => {
               console.log(err);
          });
}

// Function to check if cached data exists
function checkCachedData() {
     const cachedData = localStorage.getItem("weatherData");
     if (cachedData) {
          const response = JSON.parse(cachedData);
          let pressure = response.pressure;
          let current_time = response.current_time;

          document.getElementById("weather__city").innerHTML = "Warrington";
          document.getElementById("time").innerHTML = current_time;
          document.getElementById("pressure").innerHTML = `${pressure.toFixed(0)} hPa`;
     }
     else{
          fetchDataAndUpdateCache();
     }
     
}

checkCachedData();
// cache in every 10 seconds
setInterval(fetchDataAndUpdateCache, 10 * 1000);

