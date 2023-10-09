import React, { useEffect, useState } from "react";
import Login from "./components/login/Login";
import Brightness6Icon from '@mui/icons-material/Brightness6';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
//setting the icon when you click on the toggling button
  const getIcon = () => {
    if (theme === "light") {
      return (
        <>
          <DarkModeIcon />
          Dark
        </>
      );
    } else {
      return (
        <>
          <Brightness6Icon />
          Light
        </>
      );
    }
  };

  return (
    <div className="p-2 bg-primary-light dark:bg-primary-dark h-screen">
      <div className="p-0 flex justify-end items-end">
        <button className={`text-${theme === "light" ? 'white' : 'black'} cursor-pointer p-2 rounded-lg border border-slate-700 bg-[var(--primary-dark)] dark:bg-primary-light`} onClick={handleThemeSwitch} >{getIcon()}</button>
      </div>
      
      <div className="mt-4 flex justify-center">
        <Login />
      </div>
      

    </div>
  );
}

export default App;
