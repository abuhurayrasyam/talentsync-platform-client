import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, useLoaderData } from 'react-router';

const BrowseTasks = () => {

    const tasksData = useLoaderData();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <header className='sticky top-0 z-50'>
                <Navbar></Navbar>
            </header>
            <main className='min-h-screen mt-10'>
                <div className="w-11/12 mx-auto overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name & Email</th>
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
                                            <div className="text-sm opacity-50">{taskData?.email}</div>
                                        </td>
                                        <td>{taskData?.title}</td>
                                        <td>{taskData?.category}</td>
                                        <td>${taskData?.budget}</td>
                                        <td>{taskData?.deadline}</td>
                                        <th>
                                            <Link to={`/task-details/${taskData?._id}`}><button className="bg-[#B6B09F] text-white hover:bg-[#EAE4D5] hover:text-gray-800 rounded px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm cursor-pointer">See Details</button></Link>
                                        </th>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default BrowseTasks;