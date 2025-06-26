import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/Auth/AuthContext";
import { useLoaderData } from "react-router";
import Loading from "../components/Loading";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Dashboard = () => {

    useDocumentTitle("Talentsync Platform | Dashboard");

    const {user} = useContext(AuthContext);
    console.log(user)

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
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 text-primary">Dashboard Overview</h1>
      <div className="mb-8 p-6 bg-secondary rounded-xl shadow-md flex flex-col md:flex-row items-center  gap-6">
        <img
          className="rounded-full h-24 w-24 border-4 border-primary object-cover"
          src={user.photoURL}
          alt="User Avatar"
        />
        <div className="text-neutral space-y-2">
          <div className="flex flex-col lg:flex-row lg:gap-15 text-sm md:text-[15px]">
          <h2 className="text-lg md:text-2xl font-bold">Welcome, {user.displayName}</h2>
            <div>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Email Verified:</strong> {user.emailVerified ? "Yes" : "No"}</p>
            </div>
            <div>
              <p><strong>Account Created:</strong> {new Date(user.metadata?.creationTime).toLocaleString()}</p>
              <p><strong>Last Login:</strong> {new Date(user.metadata?.lastSignInTime).toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-secondary rounded-xl shadow-md p-6 flex flex-col items-center">
          <div className="text-5xl font-extrabold text-primary mb-2">{initialTaskData.length}</div>
          <div className="text-neutral font-semibold">Total Tasks</div>
        </div>

        <div className="bg-secondary rounded-xl shadow-md p-6 flex flex-col items-center">
          <div className="text-5xl font-extrabold text-primary mb-2">{myTasks.length}</div>
          <div className="text-neutral font-semibold">My Posted Tasks</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
