import React from 'react';
import {FaInstagram} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {BsWhatsapp} from 'react-icons/bs';
import {IoLogoYoutube} from 'react-icons/io';
import './Footer.css';


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='d-flex mt-5 border border-primary bg-dark pt-4'>
            <div className='mb-4'>
            <p className='ps-5 ms-4 footer'><small>Copyright © by </small> <span>Car Dealer {year}</span></p>
            <span className='me-2 ms-4 ps-5 footer'>
            <FaInstagram></FaInstagram> 
            </span>
            <span className='me-2 footer'>
            <FaFacebook></FaFacebook>
            </span>
            <span className='me-2 footer'>
            <BsWhatsapp></BsWhatsapp>
            </span>
            <span className='footer'>
            <IoLogoYoutube></IoLogoYoutube>
            </span>
            </div>

            <div className='ps-5 ms-auto me-4 mt-3 d-flex footer'>
                <p className='me-4'>Privacy Policy</p>
                <p className='me-4'>Terms and Conditions</p>
                <p>Contact Us</p>
            </div>

        </div>
    );
};

export default Footer;