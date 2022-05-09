import React from 'react';
import { Button, Card } from 'react-bootstrap';
import feature1 from '../../../images/Feature/feature1.png';
import feature2 from '../../../images/Feature/feature2.png';
import feature3 from '../../../images/Feature/feature3.png';
import feature4 from '../../../images/Feature/feature4.png';
import './Feature.css';


const Feature = () => {
    return (
        <div className='text-center'>
            <p>Check out our recent cars</p>
            <h2 className='mb-4'>Feature Cars</h2>
            <div className='ms-4 me-4 features-container'>
            <Card className='mx-auto' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={feature1} />
  <Card.Body>
    <Card.Title>AUDI</Card.Title>
    <Card.Text>
      Audi 2019 A4
    </Card.Text>
  </Card.Body>
</Card>
            <Card className='mx-auto' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={feature2} />
  <Card.Body>
    <Card.Title>BMW</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
            <Card className='mx-auto' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={feature3} />
  <Card.Body>
    <Card.Title>LAMBORGHINI</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
            <Card className='mx-auto' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={feature4} />
  <Card.Body>
    <Card.Title>RANGE ROVER</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
            </div>
        </div>
    );
};

export default Feature;