import React from 'react';
import AllTasks from '../components/AllTasks';
import HomeInput from '../components/HomeInput';

const Home = () => {
    return (
        <div className='home'>
            <div className="homeContainer">
                <HomeInput />
                <AllTasks />
            </div>
        </div>
    );
};

export default Home;