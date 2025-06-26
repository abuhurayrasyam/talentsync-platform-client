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
        <div className='w-11/12 mx-auto'>
            <section>
                {slidesData.length > 0 && <Slider slidesData={slidesData} />}
            </section>
            <section>
                <UpcomingTasks upcomingTasksData={upcomingTasksData}></UpcomingTasks>
            </section>
            <section>
                <HowItWorks></HowItWorks>
            </section>
            <section>
                <Testimonials></Testimonials>
            </section>
        </div>
    );
};

export default Home;