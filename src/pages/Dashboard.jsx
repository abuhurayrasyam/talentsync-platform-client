import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/Auth/AuthContext";
import { useLoaderData } from "react-router";
import Loading from "../components/Loading";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Dashboard = () => {

    useDocumentTitle("Talentsync Platform | Dashboard");

    const {user} = useContext(AuthContext);

    const initialTaskData = useLoaderData();
    const [myTasks, setMyTasks] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            setLoading(true);
            fetch(`https://talentsync-platform.vercel.app/tasks?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyTasks(data);
                setLoading(false);
            });
        }
        window.scrollTo(0, 0);
    }, [user?.email, setLoading])

    if(loading){
        return <Loading></Loading>;
    }

  return (
    <div className="p-6 bg-[#EAE4D5] min-h-full">
      <h1 className="text-3xl font-bold mb-6 text-[#3e3e3e]">Dashboard Overview</h1>

      {/* User Info Card */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow-md max-w-md">
        <h2 className="text-xl font-semibold mb-2 text-[#B6B09F]">Welcome, {user.displayName}</h2>
        <p className="text-gray-700">
          <strong>Email:</strong> {user.email}
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <div className="text-5xl font-extrabold text-[#B6B09F] mb-2">{initialTaskData.length}</div>
          <div className="text-gray-700 font-semibold">Total Tasks</div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <div className="text-5xl font-extrabold text-[#B6B09F] mb-2">{myTasks.length}</div>
          <div className="text-gray-700 font-semibold">My Posted Tasks</div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <div className="text-5xl font-extrabold text-[#B6B09F] mb-2">🚀</div>
          <div className="text-gray-700 font-semibold">Other Stats</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
