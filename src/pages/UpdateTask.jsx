import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../context/Auth/AuthContext';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';

const UpdateTask = () => {

    const {user} = useContext(AuthContext);

    const {_id, title, category, description, budget, deadline} = useLoaderData();

    const [selectedDeadline, setSelectedDeadline] = useState(new Date(deadline));

    const handleUpdateTask = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const updatedTask = Object.fromEntries(formData.entries());

        updatedTask.deadline = selectedDeadline.toISOString().split("T")[0];
        
        fetch(`http://localhost:3000/tasks/${_id}`, {
            method: 'PUT',
           headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                Swal.fire({
                    title: "Your task updated successfully!",
                    icon: "success",
                    draggable: true
                });
            }
        })
    }

    const categories = [
        "Web Development",
        "Mobile Development",
        "UI/UX Design",
        "Graphic Design",
        "Content Writing",
        "Copywriting",
        "Digital Marketing",
        "SEO & SEM",
        "Video Editing",
        "Data Entry",
        "Virtual Assistance",
        "Project Management",
        "Customer Support",
        "QA & Testing",
        "Business Consulting",
        "Finance & Accounting",
        "Sales & Lead Generation",
        "Translation & Localization",
        "AI & Machine Learning",
        "DevOps & Cloud Engineering"
    ];

    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <div className="hero bg-base-100 my-10">
                    <div className="card bg-base-100 w-full border border-gray-300 max-w-sm shrink-0 shadow-sm pb-3">
                        <div className="card-body">
                            <h1 className="font-semibold text-center text-xl">Update a Task</h1>
                            <form onSubmit={handleUpdateTask} className="fieldset">
                                <label className="label">Task Title</label>
                                <input type="text" className="input" name='title' defaultValue={title} placeholder="Enter a task title" required />
                                <label className="label">Task Category</label>
                                <select className="input" name="category" defaultValue={category} required>
                                    <option value="">Select a Category</option>
                                    {
                                        categories.map((category, index) => (<option key={index} value={category}>{category}</option>))
                                    }
                                </select>
                                <label className="label">Task Description</label>
                                <input type="text" className="input" name='description' defaultValue={description} placeholder="Enter a task description" required />
                                <label className="label">Task Deadline</label>
                                <DatePicker
                                    id="deadline"
                                    selected={selectedDeadline}
                                    onChange={(date) => setSelectedDeadline(date)}
                                    dateFormat="yyyy-MM-dd"
                                    minDate={new Date()}
                                    className="input"
                                    required
                                />
                                <label className="label">Task Budget</label>
                                <input type="number" className="input" name='budget' defaultValue={budget} placeholder="Enter a budget" required />
                                <label className="label">User Name</label>
                                <input type="text" className="input" name='name' value={user?.displayName} readOnly required />
                                <label className="label">User Email</label>
                                <input type="email" className="input" name='email' value={user?.email} readOnly required />
                                <input type="submit" className="btn btn-neutral mt-4" value="Update Task" />
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default UpdateTask;