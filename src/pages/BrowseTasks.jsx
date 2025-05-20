import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLoaderData } from 'react-router';

const BrowseTasks = () => {

    const tasksData = useLoaderData();

    return (
        <div>
            <header>
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
                                            <button className="bg-neutral text-white rounded px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm hover:bg-neutral-700 cursor-pointer">See Details</button>
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