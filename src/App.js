import React from "react";
import { useRecoilState } from "recoil";
import Router from "./router/index";
import { theme } from "./store";

function App(props) {
  const [currentTheme, setCurrentTheme] = useRecoilState(theme);
  const themeClass = currentTheme == true ? "bg-dark text-white" : "bg-white text-dark";
  return (
    <div className={`${themeClass} vh-100`}>
      <Router />
    </div>
  );
}

export default App;
