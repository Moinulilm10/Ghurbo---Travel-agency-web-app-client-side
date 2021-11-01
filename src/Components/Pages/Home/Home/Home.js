import React from 'react';
import Banner from '../Banner/Banner';
import BestDestination from '../BestDestination/BestDestination';
import Process from '../Process/Process';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <BestDestination></BestDestination>
            <Process></Process>
        </div>
    );
};

export default Home;