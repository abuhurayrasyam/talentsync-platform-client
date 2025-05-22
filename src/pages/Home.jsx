import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Slider from '../components/Slider';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import UpcomingTasks from '../components/UpcomingTasks';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Home = () => {

    const upcomingTasksData = useLoaderData();
    
    const [slidesData, setSlidesData] = useState([]);

    useEffect(() => {
        fetch('/slidersData.json')
          .then(response => response.json())
          .then(data => setSlidesData(data))
      }, []);
    
    useDocumentTitle("Talentsync Platform | Home");
    
    return (
        <div>
            <section className='w-11/12 mx-auto'>
                {slidesData.length > 0 && <Slider slidesData={slidesData} />}
            </section>
            <section className='w-11/12 mx-auto'>
                <UpcomingTasks upcomingTasksData={upcomingTasksData}></UpcomingTasks>
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