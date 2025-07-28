import React from "react";
import Main_Box from "./components/Third Component/Main_Box";
import Main from "./components/Middle Component/Main";
import Search from "./components/Top Component/Search";

const App = () => {
  return (
    <div className="bg-[linear-gradient(150deg,_rgba(168,230,255,1)_0%,_rgba(0,145,255,1)_100%)] min-h-screen">
      <Search />
      <Main />
      <Main_Box />
    </div>
  );
};

export default App;
