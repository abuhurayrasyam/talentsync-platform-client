import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { NavLink} from 'react-router';

const Sidebar = ({isSidebarOpen}) => {

    return (
      <div className={`fixed z-40 top-0 left-0 w-64 h-full bg-[#B6B09F] p-6 space-y-4 shadow-lg transform transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:block flex flex-col justify-between`}>
        <div>
            <h2 className="text-2xl font-bold text-black mb-4">Dashboard</h2>
            <nav className="flex flex-col space-y-2">
              <NavLink to={"/dashboard"} end className={({ isActive }) => `btn flex justify-start items-center m-2 cursor-pointer bg-[#B6B09F] hover:bg-[#EAE4D5] active:bg-[#EAE4D5] text-black ${isActive ? "border border-gray-200 shadow-sm" : "border-none shadow-none"}`}>Overview</NavLink>
              <NavLink to={"/dashboard/browse-tasks"} className={({ isActive }) => `btn flex justify-start items-center m-2 cursor-pointer bg-[#B6B09F] hover:bg-[#EAE4D5] active:bg-[#EAE4D5] text-black ${isActive ? "border border-gray-200 shadow-sm" : "border-none shadow-none"}`}>Browse Tasks</NavLink>
              <NavLink to={"/dashboard/add-task"} className={({ isActive }) => `btn flex justify-start items-center m-2 cursor-pointer bg-[#B6B09F] hover:bg-[#EAE4D5] active:bg-[#EAE4D5] text-black ${isActive ? "border border-gray-200 shadow-sm" : "border-none shadow-none"}`}>Add Task</NavLink>
              <NavLink to={"/dashboard/my-posted-tasks"} className={({ isActive }) => `btn flex justify-start items-center m-2 cursor-pointer bg-[#B6B09F] hover:bg-[#EAE4D5] active:bg-[#EAE4D5] text-black ${isActive ? "border border-gray-200 shadow-sm" : "border-none shadow-none"}`}>My Posted Tasks</NavLink>
            </nav>
        </div>
        <div className="mt-auto pt-6">
          <NavLink to="/" className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#EAE4D5] text-[#B6B09F] hover:bg-[#EAE4D5] transition"><FaArrowLeft /> Go to Home</NavLink>
        </div>
      </div>
    );
};

export default Sidebar;