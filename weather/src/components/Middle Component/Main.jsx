import React from "react";
import TimeBox from "./TimeBox";
import WeatherBox from "./WeatherBox";

const Main = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-10 p-3">
        <TimeBox />
        <WeatherBox />
      </div>
    </div>
  );
};

export default Main;
