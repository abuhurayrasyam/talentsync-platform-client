import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/Auth/AuthContext';

const TaskDetails = () => {
    const {user} = useContext(AuthContext);
    const initialTaskData = useLoaderData();
    const [task, setTask] = useState(initialTaskData);
    const { _id, title, category, description, budget, deadline, name, email, bidsCount } = task;

    const handleBid = () => {
        fetch(`https://talentsync-platform.vercel.app/tasks/bid/${_id}`, {
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: user.email })
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                setTask((previous) => ({ ...previous, bidsCount: previous.bidsCount + 1 }));
                Swal.fire({
                    icon: "success",
                    title: "You placed a bid!",
                    timer: 1500,
                    showConfirmButton: false,
                });
            }
            else {
                Swal.fire({
                    icon: 'info',
                    title: data.message || 'You have already bid on this task!',
                });
            }
        })
    }

    return (
        <div>
        <header>
            <Navbar />
        </header>
        <main className="max-w-4xl mx-auto px-6 py-10 space-y-8">
            <div className="bg-white border border-gray-300 text-gray-700 rounded-lg shadow-sm py-4 px-6 text-center text-xl font-semibold tracking-wide">You bid for <span>{bidsCount}</span> opportunity{bidsCount !== 1 ? 'ies' : ''}.
            </div>
            <section className="bg-white border border-gray-300 p-8 rounded-xl shadow-sm">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-6">{title}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-gray-700">
                    <div>
                        <h3 className="uppercase text-sm font-semibold text-indigo-500">Category</h3>
                        <p className="mt-1 text-lg">{category}</p>
                    </div>
                    <div>
                        <h3 className="uppercase text-sm font-semibold text-indigo-500">Budget</h3>
                        <p className="mt-1 text-lg">${budget}</p>
                    </div>
                    <div className="md:col-span-2">
                        <h3 className="uppercase text-sm font-semibold text-indigo-500">Description</h3>
                        <p className="mt-2 text-gray-800 leading-relaxed">{description}</p>
                    </div>
                    <div>
                        <h3 className="uppercase text-sm font-semibold text-indigo-500">Posted By</h3>
                        <p className="mt-1 text-lg">{name}</p>
                        <p className="text-gray-500 text-sm">{email}</p>
                    </div>
                    <div>
                        <h3 className="uppercase text-sm font-semibold text-indigo-500">Deadline</h3>
                        <p className="mt-1 text-lg">{deadline}</p>
                    </div>
                </div>
                <button onClick={handleBid} className="btn mt-5 w-full">Place Bid</button>
            </section>
        </main>
        <footer>
            <Footer />
        </footer>
        </div>
    );
};

export default TaskDetails;