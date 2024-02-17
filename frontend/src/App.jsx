import React, { useState } from "react";

import { Header, Keypad } from "./component";

import { moon, sun } from "./asset";

import "./App.css";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="app">
      <div className="app_calculator">
        <div className="app_calculator_navbar">
          <div
            className="app_calculator_navbar_togglebar"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            <div
              className={`app_calculator_navbar_togglebar_circle ${
                isDarkMode && "app_calculator_navbar_togglebar_circle_active"
              }`}
            />
          </div>
          <img src={isDarkMode ? moon : sun} alt="mode" />
        </div>
      </div>
    </div>
  );
}

export default App;
