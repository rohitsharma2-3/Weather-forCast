import React, { useContext, useEffect, useState } from "react";
import { WeatherApi } from "../context/WeatherContext";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import GrainIcon from "@mui/icons-material/Grain";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CloudIcon from "@mui/icons-material/Cloud";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";
import SevereColdIcon from "@mui/icons-material/SevereCold";

const Hourly = () => {
  const { weatherData } = useContext(WeatherApi);
  const [days, setDays] = useState([]);

  useEffect(() => {
    if (weatherData && weatherData.list) {
      const filtered = weatherData.list.filter((_, idx) => idx % 8 === 0);
      setDays(filtered);
    }
  }, [weatherData]);

  const getIcon = (main) => {
    switch (main) {
      case "Clear":
        return <WbSunnyIcon style={{ fontSize: 30, color: "#FFEB3B" }} />;
      case "Rain":
        return <GrainIcon style={{ fontSize: 30, color: "#ffffff" }} />;
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

  return (
    <div className="w-12/12 md:w-4/4 p-3 rounded">
      <div className="flex flex-col gap-8 justify-center items-center shadow-lg text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">5 Days Forecast</h2>
        <div className="w-full px-10 ">
          {days.map((item, idx) => (
            <div key={idx} className=" flex justify-between items-center mb-4">
              {getIcon(item.weather[0].main)}
              <p className="text-xl font-bold">{Math.round(item.main.temp)}°C</p>
              <p>
                {new Date(item.dt * 1000).toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })}
              </p>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hourly;
