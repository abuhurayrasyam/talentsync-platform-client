import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AuthContext } from '../context/Auth/AuthContext';
import { Link } from 'react-router';
import { FaHeart, FaRegEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

const MyPostedTasks = () => {

    const { user } = useContext(AuthContext);
    const [myTasks, setMyTasks] = useState([]);

    useEffect(() => {
    if (user?.email) {
        fetch(`http://localhost:3000/tasks?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            setMyTasks(data);
        });
    }
    }, [user?.email])

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
                                myTasks.map((taskData, index) => 
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
                                        <th className='flex gap-2 items-center'>
                                            <Link to={`/update-task/${taskData?._id}`} title="Edit"><FaRegEdit size={25} className="text-blue-500 hover:text-blue-700 text-lg md:text-xl" /></Link>
                                            <Link to={``} title="Delete"><MdDeleteForever size={26} className="text-red-500 hover:text-red-700 text-lg md:text-xl" /></Link>
                                            <button onClick={''} title="Favorite"><FaHeart size={24} className="text-pink-500 hover:text-pink-700 text-lg md:text-xl cursor-pointer" /></button>
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

export default MyPostedTasks;