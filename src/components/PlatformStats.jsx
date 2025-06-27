import { useEffect, useState } from "react";
import { FaUsers, FaTasks, FaCheckCircle, FaRocket } from "react-icons/fa";

const PlatformStats = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalTasks, setTotalTasks] = useState(0);

  useEffect(() => {
    fetch("https://talentsync-platform.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setTotalUsers(data.length));

    fetch("https://talentsync-platform.vercel.app/tasks")
      .then((res) => res.json())
      .then((data) => setTotalTasks(data.length));
  }, []);

  const stats = [
    {
      icon: <FaUsers size={30} className="text-accent" />,
      title: `${totalUsers}+`,
      subtitle: "Registered Users"
    },
    {
      icon: <FaTasks size={30} className="text-accent" />,
      title: `${totalTasks}+`,
      subtitle: "Tasks Posted"
    },
    {
      icon: <FaCheckCircle size={30} className="text-accent" />,
      title: "95%",
      subtitle: "Success Rate"
    },
    {
      icon: <FaRocket size={30} className="text-accent" />,
      title: "Fast & Reliable",
      subtitle: "Service Delivery"
    }
  ];

  return (
    <section className="bg-base-100 pt-10 pb-6">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10">
          Why Talentsync Platform?
        </h2>
        <p className="text-gray-500 pb-5 w-11/12 mx-auto">
          We are trusted by thousands of freelancers and task posters across the country. Here’s why:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-secondary rounded-lg p-6 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition"
            >
              {stat.icon}
              <h3 className="text-2xl font-bold text-neutral mt-2">
                {stat.title}
              </h3>
              <p className="text-sm text-gray-600">{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformStats;