import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../context/Auth/AuthContext';
import Swal from 'sweetalert2';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { IoMoonSharp } from 'react-icons/io5';
import { FaSun } from 'react-icons/fa';

const Navbar = () => {

    const {user, logoutUser} = useContext(AuthContext);

    const handleLogoutUser = () => {
        logoutUser()
        .then(() => {
            Swal.fire({
                icon: "success",
                title: "Logout successful!",
                showConfirmButton: false,
                timer: 1500
            });
        })
        .catch(() => {
            Swal.fire({
                title: "Logout unsuccessful!",
                icon: "error",
                draggable: true
            });
        })
    }

    const navLinks = (
        <>
        <NavLink to={"/"} className={({ isActive }) => `btn m-2 cursor-pointer bg-[#B6B09F] hover:bg-[#EAE4D5] active:bg-[#EAE4D5] text-black ${isActive ? "border border-gray-200 shadow-sm" : "border-none shadow-none"}`}>Home</NavLink>
        <NavLink to="/add-task" className={({ isActive }) => `btn m-2 cursor-pointer bg-[#B6B09F] hover:bg-[#EAE4D5] active:bg-[#EAE4D5] text-black ${isActive ? "border border-gray-200 shadow-sm" : "border-none shadow-none"}`}>Add Task</NavLink>
        <NavLink to={"/browse-tasks"} className={({ isActive }) => `btn m-2 cursor-pointer bg-[#B6B09F] hover:bg-[#EAE4D5] active:bg-[#EAE4D5] text-black ${isActive ? "border border-gray-200 shadow-sm" : "border-none shadow-none"}`}>Browse Tasks</NavLink>
        <NavLink to={"/my-posted-tasks"} className={({ isActive }) => `btn m-2 cursor-pointer bg-[#B6B09F] hover:bg-[#EAE4D5] active:bg-[#EAE4D5] text-black ${isActive ? "border border-gray-200 shadow-sm" : "border-none shadow-none"}`}>My Posted Tasks</NavLink>
        </>
    );

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
        <div className="bg-[#B6B09F] border-b border-[#EAE4D5] shadow-sm">
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="text-[#EAE4D5] p-3 lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {" "}
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                        />{" "}
                    </svg>
                    </div>
                    <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-[#B6B09F] rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                    {navLinks}
                    </ul>
                </div>
                <a className="text-black font-semibold lg:text-xl md:text-md text-sm">Talentsync <span className='text-white'>Platform</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navLinks}</ul>
                </div>
                <div className="navbar-end space-x-1.5 items-center">
                    {
                        user && (
                        <>
                            <span 
                                data-tooltip-id={`bids-tooltip-${user}`}
                                data-tooltip-content={`Name: ${user?.displayName} \n Email: ${user?.email}`}
                                data-tooltip-place="bottom"
                                data-tooltip-event="click"
                                data-tooltip-event-off="click"
                                className="cursor-pointer"> 
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-8 md:w-12 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </div>
                            </span>
                            <Tooltip 
                                id={`bids-tooltip-${user}`} 
                                clickable
                                style={{ 
                                    whiteSpace: 'pre-line',
                                    backgroundColor: '#1f2937',
                                    color: '#f9fafb',
                                    fontSize: '14px',
                                    padding: '8px 12px',
                                    borderRadius: '8px',
                                }}
                                openOnClick={true}
                                closeOnOutsideClick={true} 
                            />
                        </>)
                    }
                    <button className="bg-[#EAE4D5] rounded-sm h-8 md:h-full flex items-center justify-center">
                        <label className="swap swap-rotate w-10 h-10 flex items-center justify-center">
                            <input type="checkbox" onChange={handleToggle} checked={theme === "dark"} />
                            { theme === "dark" ? (
                                <IoMoonSharp className="text-yellow-500 text-2xl" />
                            ) : (
                                <FaSun className="text-yellow-500 text-2xl" />
                            )}
                        </label>
                    </button>
                    {
                        user ? (
                            <button onClick={handleLogoutUser} className='bg-[#EAE4D5] rounded-sm text-gray-800 text-xs md:text-base font-semibold px-2.5 py-2 md:px-4 cursor-pointer'>Logout</button>
                        ) : (
                            <>
                            <Link to={'/auth/login'} className="bg-[#EAE4D5] rounded-sm text-gray-800 text-xs md:text-base font-semibold px-2.5 py-2 md:px-4 cursor-pointer">Login</Link>
                            <Link to={'/auth/signup'} className="bg-[#EAE4D5] rounded-sm text-gray-800 text-xs md:text-base font-semibold px-2.5 py-2 md:px-4 cursor-pointer"><button>SignUp</button></Link>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;