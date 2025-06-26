import React from 'react';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import Logout from './Logout';
import UserAvatar from './UserAvatar';
import ThemeToggle from './ThemeToggle';

const TopBar = ({isSidebarOpen, setIsSidebarOpen}) => {

    const toggleSidebar = () => {
        if (window.innerWidth < 768) {
          setIsSidebarOpen((prev) => !prev);
        }
    };

    return (
        <header className="bg-[#EAE4D5] shadow-md px-4 py-4 flex justify-between items-center md:px-6">
          <button onClick={toggleSidebar} className="text-[#B6B09F] text-2xl md:hidden">
            {isSidebarOpen ? <IoMdClose /> : <FaBars />}
          </button>

          <h1 className="text-xl font-semibold text-gray-600 hidden md:block">Welcome to Your Dashboard</h1>

          <div className="flex items-center gap-4">
            <UserAvatar></UserAvatar>
            <ThemeToggle></ThemeToggle>
            <Logout></Logout>
          </div>
        </header>
    );
};

export default TopBar;