import "./App.css";
import axios from "axios";
import React, { useState } from "react";
function App() {
  const [data, setdata] = useState({});
  const [location, setLocation] = useState("");
  const url = `https:api.openweathermap.org/data/2.5/weather?q=${location}&appid=5741e78a9d963cf28a496ee1dbe29f42`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setdata(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter location..."
          onKeyPress={searchLocation}
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="des">
            <div className="location">
              <p>{data.name}</p>
            </div>

            <div className="temp">
              {data.main ? (
                <h1>{`${Math.floor(data.main.temp - 273)} °`}</h1>
              ) : null}
            </div>
          </div>

          <div className="description">
            <p>{/* {data.weather ? <p>{data.main[0].weather}</p> : null} */}</p>
          </div>

          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{data.main.feels_like}</p>
              ) : null}
              <p>Feels Like</p>
            </div>

            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}</p> : null}

              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className="bold">{data.wind.speed}</p> : null}
              <p> wind speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
