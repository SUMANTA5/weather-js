import "./App.css";
import React, { useState, useEffect } from "react";
import Weather from "./components/Weather";

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  let componentMounted = true;

  const fetchData = async () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      console.log(lat);
      console.log(long);
    });

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=842118caf5e45f6d06bb1dcbf6d2854c`
    );

    if (componentMounted) {
      setData(await response.json());
      console.log(data);
    }

    return () => {
      componentMounted = false;
    };
  };

  useEffect(() => {
    fetchData();
  }, [lat, long]);

  return (
  <>
  {(typeof data.main != 'undefined') ? (
    <Weather weatherData= {data}/>
  ): (
   <div>Loding....</div>
  )
  }
  </>
  );
}

export default App;
