import React, { useEffect } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { Link } from 'react-router';

const AboutUs = () => {

    useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    
    useDocumentTitle("Talentsync Platform | About Us");

  return (
    <div className="bg-base-100 text-neutral min-h-screen py-10 px-4 md:px-16 lg:px-24">
      <div className="w-11/12 mx-auto">

        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-primary mb-6 text-center">About Talentsync Platform</h1>
        <p className="text-lg text-gray-500 mb-10 text-center">
          A streamlined and secure platform to connect task posters with talented freelancers — fast, transparent, and hassle-free.
        </p>

        <div className="bg-secondary p-6 md:p-10 rounded-2xl shadow-md mb-12">
          <h2 className="text-2xl font-bold text-primary mb-3">🚀 Our Mission</h2>
          <p className="text-gray-700 text-base">
            To empower individuals and businesses by providing a trusted space where <strong>tasks meet talent</strong>. We’re committed to making the freelance process efficient and collaborative from start to finish.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all border-l-4 border-primary">
            <h3 className="text-xl font-semibold mb-2 text-primary">📌 Post a Task</h3>
            <p className="text-gray-600">
              Create a task with title, budget, deadline, and description. Let freelancers know exactly what you need.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all border-l-4 border-primary">
            <h3 className="text-xl font-semibold mb-2 text-primary">🔎 Browse & Bid</h3>
            <p className="text-gray-600">
              Freelancers explore tasks, apply filters, and place bids based on their skills and availability.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all border-l-4 border-primary">
            <h3 className="text-xl font-semibold mb-2 text-primary">🤝 Connect & Complete</h3>
            <p className="text-gray-600">
              Task owners select freelancers and collaborate to complete the task smoothly and on time.
            </p>
          </div>
        </div>

        <div className="bg-secondary p-6 md:p-10 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-primary mb-4">🌟 Why Choose Talentsync Platform?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>User-Friendly Interface</strong> – Responsive and intuitive for both clients and freelancers.</li>
            <li><strong>Secure Process</strong> – Safety and transparency built into every step.</li>
            <li><strong>Real-Time Collaboration</strong> – Stay connected with messaging and task tracking tools.</li>
          </ul>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-primary mb-2">Ready to get started?</h3>
          <p className="text-gray-500 mb-4">Join Talentsync today and connect with freelancers or post your first task!</p>
          <Link to={'/dashboard/add-task'} className="btn bg-primary hover:bg-secondary text-white font-semibold px-6 py-2 rounded-md shadow">
            Post a Task Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;