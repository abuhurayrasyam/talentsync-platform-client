import React from 'react';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import Logout from './Logout';
import ThemeToggle from './ThemeToggle';

const TopBar = ({isSidebarOpen, setIsSidebarOpen}) => {

    const toggleSidebar = () => {
        if (window.innerWidth < 768) {
          setIsSidebarOpen((prev) => !prev);
        }
    };

    return (
        <header className="bg-secondary  shadow-md px-4 py-4 flex justify-between items-center md:px-6">
          <div className='flex items-center gap-3'>
            <button onClick={toggleSidebar} className="text-primary text-2xl md:hidden">
              {isSidebarOpen ? <IoMdClose /> : <FaBars />}
            </button>

            <h1 className="text-sm md:text-xl font-semibold text-neutral">Welcome to Your Dashboard</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className='-mr-1'><ThemeToggle></ThemeToggle></div>
            <Logout></Logout>
          </div>
        </header>
    );
};

export default TopBar;