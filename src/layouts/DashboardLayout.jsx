import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import Sidebar from "../components/Dashboard/Sidebar";
import TopBar from "../components/Dashboard/TopBar";

const DashboardLayout = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
      if (location.pathname === "/dashboard") {
        navigate("/dashboard");
      }
    }, [location.pathname, navigate]);

  return (
    <div className="flex h-screen bg-secondary overflow-hidden">

      {isSidebarOpen && (
        <div className="fixed inset-0 z-30 bg-black/40 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>
      )}

      <Sidebar isSidebarOpen={isSidebarOpen}></Sidebar>

      <div className="flex-1 flex flex-col w-full">
        <TopBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}></TopBar>
        <main className="flex-1 overflow-y-auto p-6 bg-base-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
