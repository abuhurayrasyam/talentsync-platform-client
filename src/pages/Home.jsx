import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import UpcomingTaskCard from '../components/UpcomingTaskCard';
import Slider from '../components/Slider';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';

const Home = () => {

    const upcomingTasksData = useLoaderData();
    
    const [slidesData, setSlidesData] = useState([]);

    useEffect(() => {
        fetch('/slidersData.json')
          .then(response => response.json())
          .then(data => setSlidesData(data))
      }, []);

    return (
        <div>
            <section className='w-11/12 mx-auto'>
                {slidesData.length > 0 && <Slider slidesData={slidesData} />}
            </section>
            <section className='w-11/12 mx-auto'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center my-10'>Featured Tasks</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        upcomingTasksData.map((upcomingTaskData, index) => <UpcomingTaskCard key={index} upcomingTaskData={upcomingTaskData}></UpcomingTaskCard>)
                    }
                </div>
            </section>
            <section className='w-11/12 mx-auto'>
                <HowItWorks></HowItWorks>
            </section>
            <section className='w-11/12 mx-auto'>
                <Testimonials></Testimonials>
            </section>
        </div>
    );
};

export default Home;