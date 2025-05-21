import React from 'react';
import UpcomingTaskCard from './UpcomingTaskCard.jsx';

const UpcomingTasks = ({upcomingTasksData}) => {
    return (
        <div className='my-10'>
            <h1 className='font-bold lg:text-5xl md:text-3xl text-2xl text-center mb-10'>Featured Tasks</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-items-center w-11/12 mx-auto'>
                {
                    upcomingTasksData.map(upcomingTaskData => <UpcomingTaskCard key={upcomingTaskData._id} upcomingTaskData={upcomingTaskData}></UpcomingTaskCard>)
                }
            </div>
        </div>
    );
};

export default UpcomingTasks;