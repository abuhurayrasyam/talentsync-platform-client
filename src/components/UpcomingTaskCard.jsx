import React from 'react';
import { Link } from 'react-router';

const UpcomingTaskCard = ({upcomingTaskData}) => {

    const {_id, title, category, budget, deadline, name, email} = upcomingTaskData;

    return (
        <div className="w-11/12 mx-auto bg-[#EAE4D5] rounded-2xl shadow-sm border border-[#B6B09F] transition-transform hover:scale-[1.02] duration-200">
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
                    <Link to={`/task-details/${_id}`}><button className='btn w-full bg-[#B6B09F] hover:bg-[#EAE4D5] rounded-md border border-[#EAE4D5] hover:border-[#B6B09F] text-gray-100 hover:text-gray-800 shadow-none'>See Details</button></Link>
                </div>
        </div>
    );
};

export default UpcomingTaskCard;