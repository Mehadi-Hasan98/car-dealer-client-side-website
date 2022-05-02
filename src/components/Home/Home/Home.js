import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import Items from '../Items/Items';

const Home = () => {
    return (
        <>
           <Banner></Banner>
           <Items></Items>
           <Feature></Feature>
           <About></About>
        </>
    );
};

export default Home;