import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Cart } from './Cart';

const AppBar = () => {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand href="#home"><h1 className='text-danger fw-bold'><i class="bi bi-signpost-split"></i>Cars</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light' />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home" className='fw-bold text-light'>Home</Nav.Link>
            <Nav.Link href="#model" className='fw-bold text-light'>Model</Nav.Link>
            <Nav.Link href="#musttry" className='fw-bold text-light'>MustTry</Nav.Link>
            <Nav.Link href="#contactus" className='fw-bold text-light'>Contact Us</Nav.Link>
            <Cart/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppBar