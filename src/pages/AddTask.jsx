import { useContext, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../context/Auth/AuthContext';
import Swal from 'sweetalert2';
import useDocumentTitle from '../hooks/useDocumentTitle';

const AddTask = () => {

    const {user} = useContext(AuthContext);

    const [deadline, setDeadline] = useState(null);

    const handleAddTask = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const newTask = Object.fromEntries(formData.entries());

        const formatDate = (date) => {
            const year = date.getFullYear();
            const month = `${date.getMonth() + 1}`.padStart(2, '0');
            const day = `${date.getDate()}`.padStart(2, '0');
            return `${year}-${month}-${day}`;
        };

        newTask.deadline = formatDate(deadline);
        newTask.budget = Number(newTask.budget);
        newTask.bidsCount = 0;

        fetch('https://talentsync-platform.vercel.app/tasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    icon: "success",
                    title: "Your task added successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset();
                setDeadline(null);
            }
        })
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useDocumentTitle("Talentsync Platform | Add Task");

    const categories = [
        "Cyber Security",
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
            <main>
                 <div className="hero bg-base-100 my-10">
                    <div className="card bg-base-100 w-full border border-primary max-w-sm shrink-0 shadow-sm pb-3">
                        <div className="card-body">
                            <h1 className="text-primary font-semibold text-center text-2xl">Add a Task</h1>
                            <form onSubmit={handleAddTask} className="fieldset">
                                <label className="label">Task Title</label>
                                <input type="text" className="input" name='title' placeholder="Enter a task title" required />
                                <label className="label">Task Category</label>
                                <select className="input" name="category" required>
                                    <option value="">Select a Category</option>
                                    {
                                        categories.map((category, index) => (<option key={index} value={category}>{category}</option>))
                                    }
                                </select>
                                <label className="label">Task Description</label>
                                <input type="text" className="input" name='description' placeholder="Enter a task description" required />
                                <label className="label">Task Deadline</label>
                                <DatePicker
                                    id="deadline"
                                    selected={deadline}
                                    onChange={(date) => setDeadline(date)}
                                    dateFormat="yyyy-MM-dd"
                                    placeholderText="Select a Deadline"
                                    className="input"
                                    minDate={new Date()}
                                    required
                                />
                                <label className="label">Task Budget</label>
                                <input type="number" className="input" name='budget' placeholder="Enter a budget" required />
                                <label className="label">User Name</label>
                                <input type="text" className="input" name='name' value={user?.displayName} readOnly required />
                                <label className="label">User Email</label>
                                <input type="email" className="input" name='email' value={user?.email} readOnly required />
                                <input type="submit" className="btn bg-primary text-neutral hover:bg-secondary mt-4" value="Add Task" />
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AddTask;