import { TbSunFilled } from "react-icons/tb";
import { TbSunHigh } from "react-icons/tb";
import { BsMoonStars } from "react-icons/bs";
import { BsMoonStarsFill } from "react-icons/bs";
import { TbSunMoon } from "react-icons/tb";
import React, { useEffect, useState } from "react";

const options = [
  {
    icon: <TbSunHigh />,
    text: "light",
  },
  {
    icon: <BsMoonStars />,
    text: "dark",
  },
  {
    icon: <TbSunMoon />,
    text: "system",
  },
];

const DarkMode = () => {
  const [theme, setTheme] = useState("system");
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Проверяем, что код выполняется в браузере
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setTheme(savedTheme);
      }
    }
  }, []);
  useEffect(() => {
    const element = document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-scheme:dark)");

    function onWindowMatch() {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) && darkQuery.matches)
      ) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
    onWindowMatch();
    darkQuery.addEventListener("change", (e) => {
      if (!("theme" in localStorage)) {
        if (e.matches) {
          element.classList.add("dark");
        } else {
          element.classList.remove("dark");
        }
      }
    });

    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;

      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        break;
    }
  }, [theme]);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };
  return (
    <div className="flex bg-white/10 backdrop-blur-sm xl:rounded-full xl:w-max items-center xl:justify-center xl:h-16 gap-y-8 gap-x-6 z-50 bottom-0 left-0  px-5 xl:flex-row-reverse flex-col-reverse  justify-center py-5">
      {options.map((item) => {
        return (
          theme === item.text && (
            <button
              key={item.text}
              onClick={() => toggleOptions()}
              className={`${
                theme === item.text ? "text-accent dark:text-accentDark" : "hidden"
              }`}
            >
              {item.icon}
            </button>
          )
        );
      })}
      {isOptionsOpen && (
        <div className="flex gap-y-8 gap-x-6 flex-col-reverse xl:flex-row-reverse">
          {options.map((item) => {
            return (
              theme !== item.text && (
                <button
                  key={item.text}
                  onClick={() => {
                    setTheme(item.text);
                    setIsOptionsOpen(false);
                  }}
                >
                  {item.icon}
                </button>
              )
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DarkMode;
