import React from 'react';
import { Link } from 'react-router';

const UpcomingTaskCard = ({ upcomingTaskData }) => {
  const { _id, title, category, budget, deadline, name } = upcomingTaskData;

  return (
    <div className="bg-secondary rounded-xl shadow-md transition-transform hover:scale-[1.02] duration-200 h-full w-11/12 mx-auto">
      <div className="p-6 flex flex-col justify-between h-full min-h-[320px]">
        <div className="space-y-4 flex-1">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        </div>
        <div className="mt-6 space-y-1">
            <p className="text-sm text-gray-500">{category}</p>
            <div className="text-sm text-gray-600 gap-3">
                <p><span className="font-medium">Budget:</span> ${budget}</p>
                <p><span className="font-medium">Deadline:</span> {deadline}</p>
            </div>
            <div className="border-t border-dotted border-gray-400 py-2 mt-4 text-sm text-gray-600">
                <p><span className="font-medium">Posted by:</span> {name}</p>
            </div>
            <Link to={`/dashboard/task-details/${_id}`}>
                <button className="btn w-full bg-primary hover:bg-secondary rounded-md border border-secondary hover:border-primary text-gray-100 hover:text-gray-800 shadow-none">
                See Details
                </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingTaskCard;
