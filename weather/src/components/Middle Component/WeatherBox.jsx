import React from "react";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WavesIcon from "@mui/icons-material/Waves";
import AirIcon from "@mui/icons-material/Air";
import SpeedIcon from "@mui/icons-material/Speed";
import SunnySnowingIcon from "@mui/icons-material/SunnySnowing";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import GrainIcon from "@mui/icons-material/Grain";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CloudIcon from "@mui/icons-material/Cloud";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";
import SevereColdIcon from "@mui/icons-material/SevereCold";
import { useContext } from "react";
import { WeatherApi } from "../context/WeatherContext";
import Lottie from "lottie-react";
import load from "./Animation/load.json";

const WeatherBox = () => {
  const { city, weatherData } = useContext(WeatherApi);

  if (!weatherData || !weatherData.list || weatherData.list.length === 0) {
    return (
      <div className="text-white flex justify-center items-center mx-auto">
        <Lottie animationData={load} />
      </div>
    );
  }

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case "Clear":
        return <WbSunnyIcon style={{ fontSize: 100, color: "#FFEB3B" }} />;
      case "Rain":
        return <GrainIcon style={{ fontSize: 100, color: "#ffff" }} />;
      case "Thunderstorm":
        return <ThunderstormIcon style={{ fontSize: 100, color: "#9575CD" }} />;
      case "Drizzle":
        return <FilterDramaIcon style={{ fontSize: 100, color: "#81D4FA" }} />;
      case "Clouds":
        return <WbCloudyIcon style={{ fontSize: 100, color: "#B0BEC5" }} />;
      case "Snow":
        return <AcUnitIcon style={{ fontSize: 100, color: "#90CAF9" }} />;
      case "Mist":
      case "Haze":
      case "Fog":
        return <SevereColdIcon style={{ fontSize: 100, color: "#B0BEC5" }} />;
      default:
        return <CloudIcon style={{ fontSize: 100, color: "#ECEFF1" }} />;
    }
  };

  const current = weatherData?.list?.[0];
  const main = weatherData?.list[0]?.weather[0].main;
  const citys = weatherData?.city;
  let Citie = city.charAt(0).toUpperCase() + city.slice(1);

  const sunrise = new Date(citys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(citys.sunset * 1000).toLocaleTimeString();
  return (
    <div className="w-12/12 md:w-2/3 mx-auto p-1 md:p-3 rounded border-amber-200">
      <div className="flex flex-col md:flex-row justify-between gap-4 px-8 py-2 min-h-50 md:h-76 shadow-lg text-white">
        <div className="flex flex-col gap-4 ">
          <h2 className="text-6xl font-bold">{current.main.temp}°C</h2>
          <div className="flex items-start gap-2">
            <span className="text-2xl md:text-3xl font-bold text-gray-100">
              Feels like:{" "}
            </span>
            <span className="text-2xl md:text-5xl">
              {current.main.feels_like}
              <sup>°</sup>C
            </span>
          </div>
          <div className="flex gap-2">
            <WbSunnyIcon style={{ fontSize: 40, color: "#ffff" }} />
            <div>
              <p className="font-bold">Sunrise</p>
              <p className="text-gray-100">{sunrise}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <WbTwilightIcon style={{ fontSize: 40, color: "#ffff" }} />
            <div>
              <p className="font-bold">Sunset</p>
              <p className="text-gray-100">{sunset}</p>
            </div>
          </div>
        </div>
        <div className="flex mt-10 md:mt-0 flex-col gap-4 items-center justify-center">
          <p className="text-3xl">{Citie}</p>
          <h1 className="">{getWeatherIcon(main)}</h1>
          <p className="text-4xl mb-10 md:mb-0">{main}</p>
        </div>
        <div className="px-7 flex gap-7 mb-10 md:mb-0">
          <div className="flex flex-col  gap-20">
            <div className="text-center">
              <WavesIcon style={{ fontSize: 30, color: "#ffff" }} />
              <h3 className="text-2xl ">{current.main.humidity}%</h3>
              <p className="text-gray-200">Humidity</p>
            </div>
            <div className="text-center">
              <SpeedIcon style={{ fontSize: 30, color: "#ffff" }} />
              <h3 className="text-2xl">{current.main.pressure}hPa</h3>
              <p className="text-gray-200">Pressure</p>
            </div>
          </div>
          <div className="flex flex-col gap-20">
            <div className="text-center">
              <AirIcon style={{ fontSize: 30, color: "#ffff" }} />
              <h3 className="text-2xl ">{current.wind.speed}Km/h</h3>
              <p className="text-gray-200">Wind Speed</p>
            </div>

            <div className="text-center">
              <SunnySnowingIcon style={{ fontSize: 30, color: "#ffff" }} />
              <h3 className="text-2xl">8</h3>
              <p className="text-gray-200">UV</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherBox;

// EuUDEVLGDnh7qxC
