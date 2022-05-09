import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import Items from '../Items/Items';

const Home = () => {
    if(window.location.reload === true){
        <Loading></Loading>
    }
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