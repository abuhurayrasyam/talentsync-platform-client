import React, { useEffect, useState } from 'react';
import { IoMoonSharp } from 'react-icons/io5';
import { FaSun } from 'react-icons/fa';

const ThemeToggle = () => {

    const [theme, setTheme] = useState("light");

    useEffect(() => {
    const localTheme = localStorage.getItem("theme") || "light";
    setTheme(localTheme);

    if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }

    document.documentElement.setAttribute("data-theme", localTheme);
    }, []);

    const handleToggle = (e) => {
    if (e.target.checked) {
        document.documentElement.classList.add("dark");
        setTheme("dark");
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.classList.remove("dark");
        setTheme("light");
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
    }
    };

    return (
        <button className="bg-[#EAE4D5] border border-[#B6B09F] rounded-sm h-8 md:h-full flex items-center justify-center">
            <label className="swap swap-rotate w-10 h-10 flex items-center justify-center">
                <input type="checkbox" onChange={handleToggle} checked={theme === "dark"} />
                { theme === "dark" ? (
                    <IoMoonSharp className="text-yellow-500 text-2xl" />
                ) : (
                    <FaSun className="text-yellow-500 text-2xl" />
                )}
            </label>
        </button>
    );
};

export default ThemeToggle;