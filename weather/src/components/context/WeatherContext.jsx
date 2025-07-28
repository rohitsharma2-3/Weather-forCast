import { useState, createContext, useEffect } from "react";
export const WeatherApi = createContext(null);

export const WeatherContext = (props) => {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("Ahmedabad");

  let apiKey = "05fddd9624a31eb40f39aeebd8b5a093";
  let weather = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  useEffect(() => {
    fetch(weather)
      .then((res) => res.json())
      .then((data) => setWeatherData(data))
      .catch((err) => console.log(err));
  }, [city]);

  return (
    <WeatherApi.Provider value={{ weatherData, setWeatherData, city, setCity }}>
      {props.children}
    </WeatherApi.Provider>
  );
};
