import React from 'react';
import Banner from '../Banner/Banner';
import TravelGuru from '../Banner/TravelGuru/TravelGuru';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import TripPlanner from '../TripPlanner/TripPlanner';

const Home = () => {
    return (
        <div>
            <Banner />
            <TripPlanner />
            <Services />
            <TravelGuru />
            <Footer />
        </div>
    );
};

export default Home;