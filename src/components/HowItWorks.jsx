import React from 'react';
import { FaPlusCircle, FaSearch, FaHandshake } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <div className="w-11/12 mx-auto py-12">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10">
        How It Works
      </h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
        
        <div className="text-center px-4">
          <FaPlusCircle className="text-5xl text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Post a Task</h3>
          <p className="text-gray-600">
            Create a task with title, budget, deadline, and description. Let freelancers know what you need.
          </p>
        </div>

        <div className="text-center px-4">
          <FaSearch className="text-5xl text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Browse & Bid</h3>
          <p className="text-gray-600">
            Freelancers explore tasks, apply filters, and place bids based on their expertise and availability.
          </p>
        </div>

        <div className="text-center px-4">
          <FaHandshake className="text-5xl text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Connect & Complete</h3>
          <p className="text-gray-600">
            Task owners review bids, select freelancers, and collaborate to get the job done on time.
          </p>
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;