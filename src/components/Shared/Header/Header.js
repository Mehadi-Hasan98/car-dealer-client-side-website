import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {

  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }
    return (
        <div>
 <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
  <Container>
  <h5 className='main-text'>Car Dealer</h5>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className='ms-auto'>
      <Nav.Link as={Link} to="home">Home</Nav.Link>
      <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
      {
        user && <>
        <Nav.Link as={Link} to="additem">Add Items</Nav.Link>
        <Nav.Link as={Link} to="manage">Manage Items</Nav.Link>
        <Nav.Link as={Link} to="myitem">My Items</Nav.Link>
        </>
      }
      {
        user ?
        <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign out</button>
        :
        <Nav.Link as={Link} to="login">Login</Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;