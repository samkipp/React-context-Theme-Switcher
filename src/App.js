import "./styles.css";
import Card from "./components/Card.js";
import { MyContext } from "./context/context"
import React, { useState } from "react";
import useLocalStorage from "use-local-storage";

export default function App() {
  const [title, setTitle] = useState("dark");

  const defaultDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    const newTitle = title === "light" ? "dark" : "light";
    setTitle(newTitle);
  };

  return (
    <MyContext.Provider value={theme}>
      <div className="App" data-theme={theme}>
        <h1>A card that changes theme</h1>
        <Card switchTheme={switchTheme} title={title} />
      </div>
    </MyContext.Provider>
  );
}
