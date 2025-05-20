import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AuthContext } from '../context/Auth/AuthContext';
import { Link, useLoaderData } from 'react-router';
import { FaHeart, FaRegEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import Swal from 'sweetalert2';

const MyPostedTasks = () => {

    const { user } = useContext(AuthContext);

    const initialTaskData = useLoaderData();
    const [myTasks, setMyTasks] = useState(initialTaskData);

    useEffect(() => {
    if (user?.email) {
        fetch(`https://talentsync-platform.vercel.app/tasks?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            setMyTasks(data);
        });
    }
    }, [user?.email])

    const handleDeleteTask = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://talentsync-platform.vercel.app/tasks/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount){
                        Swal.fire({
                            icon: "success",
                            title: "Deleted!",
                            text: "Task has been deleted.",
                            showConfirmButton: false,
                            timer: 1500
                        });

                        const remainingTasks = myTasks.filter(user => user._id !== id);
                        setMyTasks(remainingTasks);
                    }
                })
            }
        });
    }

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
                                            <button onClick={() => handleDeleteTask(taskData?._id)} title="Delete"><MdDeleteForever size={26} className="text-red-500 hover:text-red-700 text-lg md:text-xl cursor-pointer" /></button>
                                            <Link to={''} title="Favorite"><FaHeart size={24} className="text-pink-500 hover:text-pink-700 text-lg md:text-xl" /></Link>
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