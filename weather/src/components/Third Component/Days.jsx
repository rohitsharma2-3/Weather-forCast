import React, { useContext, useEffect, useState } from "react";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import NavigationIcon from "@mui/icons-material/Navigation";
import { WeatherApi } from "../context/WeatherContext";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import GrainIcon from "@mui/icons-material/Grain";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CloudIcon from "@mui/icons-material/Cloud";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";
import SevereColdIcon from "@mui/icons-material/SevereCold";

const Days = () => {
  let { weatherData } = useContext(WeatherApi);
  const [data, setData] = useState([]);

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case "Clear":
        return <WbSunnyIcon style={{ fontSize: 30, color: "#FFEB3B" }} />;
      case "Rain":
        return <GrainIcon style={{ fontSize: 30, color: "#ffff" }} />;
      case "Thunderstorm":
        return <ThunderstormIcon style={{ fontSize: 30, color: "#9575CD" }} />;
      case "Drizzle":
        return <FilterDramaIcon style={{ fontSize: 30, color: "#81D4FA" }} />;
      case "Clouds":
        return <WbCloudyIcon style={{ fontSize: 30, color: "#B0BEC5" }} />;
      case "Snow":
        return <AcUnitIcon style={{ fontSize: 30, color: "#90CAF9" }} />;
      case "Mist":
      case "Haze":
      case "Fog":
        return <SevereColdIcon style={{ fontSize: 30, color: "#B0BEC5" }} />;
      default:
        return <CloudIcon style={{ fontSize: 30, color: "#ECEFF1" }} />;
    }
  };

  useEffect(() => {
    if (weatherData && weatherData.list) {
      setData(weatherData?.list.slice(0, 6));
      
    }
  }, [weatherData]);


  return (
    <div className="w-12/12 md:w-2/3 mx-auto p-3 rounded border-amber-200">
      <div className="flex flex-col gap-4 px-8 py-2 h-76 shadow-lg text-white">
        <div className="flex items-center text-center justify-center text-2xl md:text-3xl font-bold">
          Hourly Forcast
        </div>
        <div className="flex justify-center items-center gap-10 overflow-x-scroll scroll-smooth scrollll">
          {data.map((weather, i) => (
            <div
              className="flex flex-col justify-center items-center gap-5 p-2 border w-30 rounded"
              key={i}
            >
              <h4>
                {new Date(weather.dt * 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </h4>
              <h3>{getWeatherIcon(weather.weather[0].main)}</h3>
              <h4>{weather.main.temp}°C</h4>
              <NavigationIcon />
              <h4>{weather.wind.speed}Km/h</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Days;
