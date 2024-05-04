import React, { useEffect, useRef, useContext } from "react";
import Moon from "./icons/Moon";
import Sun from "./icons/Sun";
import { ThemeContext } from "../lib/context";

const ThemeToggle = ({ setTheme }: { setTheme: Function }) => {
  const checkbox = useRef<HTMLInputElement>(null);
  const theme = useContext(ThemeContext);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const handleToggle = () => {
    if (checkbox.current) checkbox.current.checked = !checkbox.current.checked;
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  };

  return (
    <div
      className="fixed right-[50px] bottom-[50px] z-10"
      onClick={handleToggle}
    >
      <label
        className="relative inline-block h-[34px] w-[60px]"
        htmlFor="checkbox"
      >
        <input
          type="checkbox"
          ref={checkbox}
          className="invisible"
          id="toggleTheme"
        />
        <div className="slider absolute bottom-0 left-0 right-0 top-0 flex cursor-pointer rounded bg-sky-200 shadow-md transition">
          <Moon />
          <Sun />
        </div>
      </label>
    </div>
  );
};

export default ThemeToggle;
