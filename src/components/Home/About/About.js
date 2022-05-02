import React from 'react';
import about from '../../../images/about/about.jpg';
import {FaCar} from 'react-icons/fa';
import {BiSupport} from 'react-icons/bi';
import {GiKeyCard} from 'react-icons/gi';
import {GiWallet} from 'react-icons/gi';

const About = () => {
    return (
        <div>
            <div className='d-flex'>
              <div className='ms-5 me-5'>
              <h2 className='mt-5 mb-5 ms-5 text-dark'>ABOUT US</h2>
               <p>Everything you need to build an amazing dealership website.
                Car Dealer is the most enticing, creative, modern and multipurpose auto dealer Premium WordPress Theme. Suitable for any car dealer websites, business or corporate websites. The Theme has been Created especially for automotive dealers, car resellers, car service stations, mechanic workshop and auto motor retailers.</p>
              </div>
               
               <img
               className='ms-auto me-5 mt-5 mb-5'
             height={300}
             width={400}
             src={about} alt="" />
           </div>
           
            <div className='d-flex col-12 mt-5 fw-bold'>
                <div className='mx-auto'>
                <h4><FaCar/> ALL BRANDS</h4>
                 <p>More than 100 brands</p>
                </div>
                <div className='mx-auto'>
                <h4><BiSupport/> FULL SUPPORT</h4>
                <p>Premium and 24/7</p>
                </div>
                <div className='mx-auto'>
                <h4><GiKeyCard/> DEALERSHIP</h4>
                <p>Single or multiple</p>
                </div>
                <div className='mx-auto'>
                <h4><GiWallet/> AFFORDABLE</h4>
                <p>Best suitable price</p>
                </div>
            </div>
        </div>
    );
};

export default About;