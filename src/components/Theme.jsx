import React, { useEffect, useState } from "react";
//import Login from "./login/Login";
import Brightness6Icon from '@mui/icons-material/Brightness6';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Link } from 'react-router-dom'
import banner from '../Assets/banner.png'
import MenuBar from "./MenuBar";
//import Signin from "./login/SignUp";

function Theme() {
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
    <div className="p-2 bg-primary-light dark:bg-primary-dark rounded-t-xl ">
      <div className="flex justify-between items-center">
        <div className="w-20">
            <Link to='./'>
            <img src={banner} alt="" />
            </Link>
        </div>
        <div className="p-0 flex justify-end items-end">
            <button className={`text-${theme === "light" ? 'white' : 'black'} cursor-pointer p-2 rounded-lg border border-[var(--secondary-text)] dark:border-[var(--primary-text1)] bg-[var(--primary-dark)] dark:bg-primary-light text-[var(--primary-light)] dark:text-primary-text`} onClick={handleThemeSwitch} >{getIcon()}</button>
        </div>
      </div>

      {/*<div className=" h-[87vh]">
        <MenuBar />
  </div>*/}
      
      
    </div>
  );
}

export default Theme
