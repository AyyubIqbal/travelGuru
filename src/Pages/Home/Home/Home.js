import React from 'react';
import Banner from '../Banner/Banner';
import TravelGuru from '../Banner/TravelGuru/TravelGuru';
import Services from '../Services/Services';
import TripPlanner from '../TripPlanner/TripPlanner';

const Home = () => {
    return (
        <div>
            <Banner />
            <TripPlanner />
            <Services />
            <TravelGuru />
        </div>
    );
};

export default Home;