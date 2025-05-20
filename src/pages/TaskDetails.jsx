import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLoaderData } from 'react-router';

const TaskDetails = () => {

    const {_id, title, category, description, budget, deadline, name, email} = useLoaderData()
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='text-center'>
                {_id}, {title}, {category}, {description}, {budget}, {deadline}, {name}, {email}
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default TaskDetails;