import React from 'react';


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='text-center text-white mt-5 border border-primary bg-dark pt-4'>
             <p><small>Copyright © by </small> <span>Car Dealer {year}</span></p>
        </div>
    );
};

export default Footer;