import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>

      <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#8bb863" }} className='shadow'>
        <Container>
          <Link to={'/'} style={{ textDecoration: "none" }}>
            <img
              alt="logo"
              src="https://i.postimg.cc/q73P7H98/Screenshot-2024-04-22-221304-removebg-preview.png"
              width="70"
              height="50"
              className="d-inline-block align-top"
            />{' '}
          </Link>
          <Navbar.Brand href="#home" className='navb'><b><h2 style={{color:"#304324"}}>RcipeRadar</h2></b></Navbar.Brand>

          <Navbar.Toggle className='border-0 shadow-none' aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link className=''> <Link to={'/'} style={{textDecoration:"none", color:"#304324"}}><b>Home</b></Link></Nav.Link>
              <Nav.Link className=''> <Link to={'/'} style={{textDecoration:"none", color:"#304324"}}><b>About</b></Link></Nav.Link>
              <Nav.Link className=''><b style={{color:"#304324"}}>Recipe</b></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
