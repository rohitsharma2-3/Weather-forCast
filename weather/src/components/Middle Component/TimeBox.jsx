import React, { useContext, useEffect, useState } from "react";
import { WeatherApi } from "../context/WeatherContext";

const TimeBox = () => {
  const { city } = useContext(WeatherApi);
  const [time, setTime] = useState("");
  let Citie = city.charAt(0).toUpperCase() + city.slice(1);

  let date = new Date().toDateString();
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date()
        .toLocaleTimeString()
        .split(":")
        .slice(0, 3)
        .join(":");
      setTime(currentTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-12/12 md:w-1/3 mx-auto p-3 rounded border-amber-200">
      <div className="flex flex-col gap-10 text-center justify-center items-center h-76 shadow-lg text-white">
        <h2 className="text-3xl font-bold">India</h2>
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-3xl md:text-5xl font-bold">{time}</h1>
          <p className="text-gray-200">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default TimeBox;
