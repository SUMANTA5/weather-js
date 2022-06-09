import React from "react";

function Weather({weatherData}) {


    const refresh = () => {
        window.location.reload()
    }

    let temp = (weatherData.main.temp - 273.15).toFixed(2)
    let mintemp = (weatherData.main.temp_min - 273.15).toFixed(2)
    let maxtemp = (weatherData.main.temp_max - 273.15).toFixed(2)
    

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div class="card text-white bg-primary mb-3 shadow-lg text-conter">
              <div class="card-header">Weather
              <i className="fa fa-refresh float-end pt-1" onClick={refresh}></i>
              </div>
              <div class="card-body py-5">
                <h2 class="card-title mb-6">{weatherData.name}</h2>
                <p class="card-text">
                  Tuesday, june 09, 2022
                </p>
                <h1>{temp} &deg;C</h1>
                <p>{weatherData.weather[0].main}</p>
                <p>{mintemp}&deg;C | {maxtemp} &deg;C</p>
                <p>Humidity: {weatherData.main.humidity}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
