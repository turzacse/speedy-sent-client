import React from 'react';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import Statistics from '../Statistics/Statistics';
import DeliveryMen from '../DeliveryMen/DeliveryMen';

const Home = () => {
    return (
        <div className='mx-10'>
            <Banner></Banner>
            <Feature></Feature>
            <Statistics></Statistics>
            {/* <DeliveryMen></DeliveryMen> */}
        </div>
    );
};

export default Home;