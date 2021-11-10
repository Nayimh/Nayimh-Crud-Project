import React from 'react';
import ContactForm from '../../Contactform/ContactForm';
import Footter from '../../Footer/Footter';
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
            <Footter></Footter>
        </div>
    );
};

export default Home;