import React, { useContext, useEffect, useState } from "react";
import { WeatherApi } from "../context/WeatherContext";

const Search = () => {
  const { setCity } = useContext(WeatherApi);
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setCity(input);
    setInput("");
  };

  useEffect(() => {
    if (!input.trim()) return;
    let timer = setTimeout(() => {
      setCity(input);
    }, 500);

    return () => clearTimeout(timer);
  }, [input, setCity]);

  return (
    <div className="pt-10 w-10/12 md:w-6/12 mx-auto">
      <form className="flex gap-2 items-center" onSubmit={onSubmitHandler}>
        <input
          type="search"
          id="search"
          name="city"
          value={input}
          onChange={inputHandler}
          placeholder="Search about your city"
          className="border placeholder:text-white text-white border-white px-4 py-3 rounded-2xl outline-none w-full"
        />
        <button className="px-5 md:px-10 py-3 bg-sky-500 text-white rounded-2xl">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
