import React from 'react';
import { useLoaderData } from 'react-router';

const Home = () => {

    const upcomingTasksData = useLoaderData();
    console.log(upcomingTasksData);

    return (
        <div>
            Home
        </div>
    );
};

export default Home;