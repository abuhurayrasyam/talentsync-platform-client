import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/Auth/AuthContext';
import { Link } from 'react-router';
import { FaHeart, FaRegEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import Swal from 'sweetalert2';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Loading from '../components/Loading';

const MyPostedTasks = () => {

    useDocumentTitle("Talentsync Platform | My Posted Tasks");

    const { user } = useContext(AuthContext);

    const [myTasks, setMyTasks] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
    if (user?.email) {
        setLoading(true);
        fetch(`https://talentsync-platform.vercel.app/tasks?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            setMyTasks(data);
            setLoading(false);
        });
    }
    window.scrollTo(0, 0);
    }, [user?.email, setLoading])

    if(loading){
        return <Loading></Loading>;
    }

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
            <main className='min-h-screen mt-5'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-10 ml-10'>My Posted Tasks</h1>
                <div className="w-11/12 mx-auto overflow-x-auto">
                    {
                        myTasks.length > 0 ? (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
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
                                                <td>{taskData?.title}</td>
                                                <td>{taskData?.category}</td>
                                                <td>${taskData?.budget}</td>
                                                <td>{taskData?.deadline}</td>
                                                <th className='flex gap-2 items-center'>
                                                    <Link to={`/dashboard/update-task/${taskData?._id}`} title="Edit"><FaRegEdit size={25} className="text-blue-500 hover:text-blue-700 text-lg md:text-xl" /></Link>
                                                    <button onClick={() => handleDeleteTask(taskData?._id)} title="Delete"><MdDeleteForever size={26} className="text-red-500 hover:text-red-700 text-lg md:text-xl cursor-pointer" /></button>

                                                    <span 
                                                        data-tooltip-id={`bids-tooltip-${taskData._id}`}
                                                        data-tooltip-content={`Total bids: ${taskData.bidsCount || 0}`}
                                                        data-tooltip-place="top"
                                                        data-tooltip-event="click"
                                                        data-tooltip-event-off="click"
                                                        className="cursor-pointer"> 
                                                    <FaHeart size={24} className="text-pink-500 hover:text-pink-700" />
                                                    </span>
                                                    <Tooltip 
                                                        id={`bids-tooltip-${taskData._id}`} 
                                                        clickable
                                                        style={{ 
                                                            backgroundColor: '#1f2937',
                                                            color: '#f9fafb',
                                                            fontSize: '14px',
                                                            padding: '8px 12px',
                                                            borderRadius: '8px',
                                                        }}
                                                        openOnClick={true}
                                                        closeOnOutsideClick={true} 
                                                    />
                                                </th>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        ) : (
                            <div className="text-center py-10">
                                <h2 className="text-2xl font-semibold text-natural">You haven't posted any tasks yet.</h2>
                                <p className="text-primary mt-2">Start by creating a new task to see it listed here.</p>
                                <Link to={'/add-task'}><button className='btn mt-5 bg-secondary hover:bg-primary border-1 border-dashed border-primary text-gray-700'>Add a Task</button></Link>
                            </div>
                        )
                    }
                </div>
            </main>
        </div>
    );
};

export default MyPostedTasks;