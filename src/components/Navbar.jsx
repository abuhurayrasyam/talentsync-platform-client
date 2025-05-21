import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../context/Auth/AuthContext';
import Swal from 'sweetalert2';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { CiSun } from 'react-icons/ci';
import { IoMoonSharp } from 'react-icons/io5';

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
        <NavLink to={"/"} className="btn btn-ghost m-2 cursor-pointer">Home</NavLink>
        <NavLink to={"/add-task"} className="btn btn-ghost m-2 cursor-pointer">Add Task</NavLink>
        <NavLink to={"/browse-tasks"} className="btn btn-ghost m-2 cursor-pointer">Browse Tasks</NavLink>
        <NavLink to={"/my-posted-tasks"} className="btn btn-ghost m-2 cursor-pointer">My Posted Tasks</NavLink>
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
        <div className="bg-base-100 shadow-sm">
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
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
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                    {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost lg:text-xl md:text-md text-sm">Talentsync Platform</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navLinks}</ul>
                </div>
                <div className="navbar-end space-x-2 items-center">
                    <button className="btn btn-square">
                        <label className="swap swap-rotate w-10 h-10">
                            <input type="checkbox" onChange={handleToggle} checked={theme === "dark"} />
                            { theme === "dark" ? (
                                <IoMoonSharp className="text-blue-600 text-2xl" />
                            ) : (
                                <CiSun className="text-yellow-400 text-2xl" />
                            )}
                        </label>
                    </button>
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
                                    <div className="w-10 rounded-full">
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
                    {
                        user ? (
                            <button onClick={handleLogoutUser} className='btn'>Logout</button>
                        ) : (
                            <>
                            <Link to={'/auth/login'} className="btn">Login</Link>
                            <Link to={'/auth/signup'} className="btn">SignUp</Link>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;