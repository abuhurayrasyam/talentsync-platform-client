import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import 'react-tooltip/dist/react-tooltip.css';
import Logout from './Logout';
import UserAvatar from './UserAvatar';
import { AuthContext } from '../context/Auth/AuthContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {

    const {user} = useContext(AuthContext);

    const publicNavLink = (
        <>
        <NavLink to={"/"} className={({ isActive }) => `btn m-2 cursor-pointer bg-[#B6B09F] hover:bg-[#EAE4D5] active:bg-[#EAE4D5] text-black ${isActive ? "border border-gray-200 shadow-sm" : "border-none shadow-none"}`}>Home</NavLink>
        <NavLink to={"/browse-tasks"} className={({ isActive }) => `btn m-2 cursor-pointer bg-[#B6B09F] hover:bg-[#EAE4D5] active:bg-[#EAE4D5] text-black ${isActive ? "border border-gray-200 shadow-sm" : "border-none shadow-none"}`}>Browse Tasks</NavLink>
        <NavLink to={"/about-us"} className={({ isActive }) => `btn m-2 cursor-pointer bg-[#B6B09F] hover:bg-[#EAE4D5] active:bg-[#EAE4D5] text-black ${isActive ? "border border-gray-200 shadow-sm" : "border-none shadow-none"}`}>About Us</NavLink>
        <NavLink to={"/contact-us"} className={({ isActive }) => `btn m-2 cursor-pointer bg-[#B6B09F] hover:bg-[#EAE4D5] active:bg-[#EAE4D5] text-black ${isActive ? "border border-gray-200 shadow-sm" : "border-none shadow-none"}`}>Contact Us</NavLink>
        </>
    );

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
                    {publicNavLink}
                    </ul>
                </div>
                <a className="text-black font-semibold lg:text-xl md:text-md text-sm">Talentsync <span className='text-white'>Platform</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{publicNavLink}</ul>
                </div>
                <div className="navbar-end space-x-1.5 items-center">
                    <UserAvatar></UserAvatar>
                    <ThemeToggle></ThemeToggle>
                    {
                        user ? (
                            <>  
                            <NavLink to={"/dashboard"} className='bg-[#EAE4D5] rounded-sm text-gray-800 text-xs md:text-base font-semibold px-2.5 py-2 md:px-4 cursor-pointer'>Dashboard</NavLink>
                            <Logout></Logout>
                            </>
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