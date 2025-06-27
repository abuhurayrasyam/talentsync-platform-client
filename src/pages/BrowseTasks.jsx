import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router';
import useDocumentTitle from '../hooks/useDocumentTitle';

const BrowseTasks = () => {

    const tasksData = useLoaderData();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useDocumentTitle("Talentsync Platform | Browse Tasks");

    return (
        <div>
            <main className='min-h-screen mt-5'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-10 ml-10'>All Tasks</h1>
                <div className="w-11/12 mx-auto overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Posted By</th>
                                <th>Task</th>
                                <th>Category</th>
                                <th>Budget</th>
                                <th>Deadline</th>
                                <th>Details</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tasksData.map((taskData, index) => 
                                    <tr key={taskData?._id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="font-bold">{taskData?.name}</div>
                                        </td>
                                        <td>{taskData?.title}</td>
                                        <td>{taskData?.category}</td>
                                        <td>${taskData?.budget}</td>
                                        <td>{taskData?.deadline}</td>
                                        <th>
                                            <Link to={`/dashboard/task-details/${taskData?._id}`}><button className="bg-primary text-white hover:bg-secondary hover:text-gray-800 rounded-md px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm cursor-pointer">See Details</button></Link>
                                        </th>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default BrowseTasks;