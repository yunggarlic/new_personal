import React, { useState, useEffect, useRef } from "react";
import Moon from './icons/Moon';
import Sun from './icons/Sun';

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");
  const checkbox = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleToggle = () => {
    if(checkbox.current)
        checkbox.current.checked = !checkbox.current.checked;
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="fixed right-[50px] bottom-[50px]" onClick={handleToggle} >
      <label
        className="relative inline-block h-[34px] w-[60px]"
        htmlFor="checkbox"
      >
        <input type="checkbox" ref={checkbox} className="invisible" id="toggleTheme" />
        <div className="slider flex rounded bottom-0 cursor-pointer left-0 absolute right-0 top-0 transition"><Moon /><Sun/></div>
      </label>
    </div>
  );
};

export default ThemeToggle;
