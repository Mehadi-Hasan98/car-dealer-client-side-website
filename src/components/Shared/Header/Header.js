import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
 <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
  <Container>
  <h5 className='main-text'>Car Dealer</h5>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className='ms-auto'>
      <Nav.Link as={Link} to="home">Home</Nav.Link>
      <Nav.Link as={Link} to="inventory">Inventory</Nav.Link>
      <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
      <Nav.Link as={Link} to="login">Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;