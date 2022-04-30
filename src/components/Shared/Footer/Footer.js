import React from 'react';


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='text-center mt-5 border border-primary bg-primary pt-4'>
             <p><small>Copyright © by </small> <span className='fw-bold'>Car Dealer ({year})</span></p>
        </div>
    );
};

export default Footer;