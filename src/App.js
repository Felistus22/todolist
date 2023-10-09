import React, { useEffect, useState } from "react";
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
    <div className="p-2 bg-primary-light dark:bg-primary-dark">
      <div className="p-0 flex justify-end items-end">
        
        <button className={`text-${theme === 'dark' ? 'text-white' : 'text-black'} cursor-pointer p-6 border border-[var(--primary-light)] dark:border-[var(--primary-dark)] bg-amber-700 dark:bg-primary-dark`} onClick={handleThemeSwitch} >{getIcon()}</button>

      </div>
      
    </div>
  );
}

export default App;
