import React from 'react';
import { Link } from 'react-router';

const UpcomingTaskCard = ({upcomingTaskData}) => {

    const {_id, title, category, budget, deadline, name, email} = upcomingTaskData;

    return (
        <div className="max-w-md mx-auto p-4">
            <div className="bg-white border border-gray-300 p-6 rounded-xl shadow-sm w-[380px]">
                <div className="p-6 space-y-4">
                    <h2 className="text-xl font-bold text-gray-800">{title}</h2>
                    <p className="text-sm text-gray-500">{category}</p>

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-gray-600 gap-5">
                        <p><span className="font-medium">Budget:</span> ${budget}</p>
                        <p><span className="font-medium">Deadline:</span> {deadline}</p>
                    </div>

                    <div className="border-t border-dotted border-gray-400 pt-4 mt-4 text-sm text-gray-600">
                        <p><span className="font-medium">Posted by:</span> {name}</p>
                        <p><span className="font-medium">Email:</span> {email}</p>
                    </div>
                    <Link to={`/task-details/${_id}`}><button className='btn w-full'>See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default UpcomingTaskCard;