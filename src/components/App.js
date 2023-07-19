
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const API_KEY = "344a4d0c4ee9759b97c06aeffe807c61";
  const [search, setSearch] = useState("");
  const [weatherData, setWeatherData] = useState("");

  function handleEnter(event) {
    if (event.key == "Enter") {
      getWeather();
    }
  }
  
  
  function getWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}`)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        let obj = {
          name: data.name,
          temp: data.main.temp,
          weather: data.weather[0].main,
        };
        console.log("Object", obj);
        setSearch('')
        setWeatherData(obj);
      })
  }
  getWeather();
  return (
    <div>
      {/* Do not remove the main div */}
      <input className="search"
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleEnter}
        value={search}
      />
      {weatherData ? (
        <div className="weather">
          <h1>{weatherData.name}</h1>
          <h2>{weatherData.temp}</h2>
          <p>{weatherData.weather}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default App
