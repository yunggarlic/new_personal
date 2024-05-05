"use client";
import { useState } from "react";
import { ThemeContext } from "../lib/context";
import { ThemeToggle } from "./";

const ThemeWrapper = ({ children }: any) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      {children}
      <ThemeToggle setTheme={setTheme} />
    </ThemeContext.Provider>
  );
};

export default ThemeWrapper