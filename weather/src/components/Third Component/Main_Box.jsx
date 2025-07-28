import React from "react";
import Hourly from "./Hourly";
import Days from "./Days";

const Main_Box = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-10 p-3">
        <Days />
        <Hourly />
      </div>
    </div>
  );
};

export default Main_Box;
