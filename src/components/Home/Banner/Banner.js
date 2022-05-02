import React from 'react';
import { Carousel } from 'react-bootstrap';
import car1 from '../../../images/Banner/car (1).jpg';
import car2 from '../../../images/Banner/car2.jpg';
import car3 from '../../../images/Banner/car3.jpg';
const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
        height={700}
      className="d-block w-100"
      src={car1}
      alt=""
    />
    <Carousel.Caption>
      <p className='bg-danger w-50 fw-bold'>We are the best</p>
      <h1>YOUR VEHICLE IS SAFE WITH US</h1>
      <p>we provide the best solution for your car needs.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
        height={700}
      className="d-block w-100"
      src={car2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1>IMPROVE YOUR BUSSINESS WITH US</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
        height={800}
      className="d-block w-100"
      src={car3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>WE PROVIDE THE BEST SERVICE</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;