import React from 'react';
import ContactForm from '../../Contactform/ContactForm';
import Ratings from '../../Ratings/Ratings/Ratings';

import Banner from '../Banner/Banner';
import Cars from './Cars/Cars';

const Home = () => {
    return (
        <div>
          
            <Banner></Banner>
            <Cars></Cars>
            <Ratings></Ratings>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;