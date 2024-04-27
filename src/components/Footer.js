import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='foot py-3' style={{backgroundColor:"#304324"}}>

      <Container>
        <Row className='d-flex justify-content-center'>
          <Col lg={4} md={4}>
          <div className='d-flex  flex-column'>
            <div className='d-flex '>
              <img
                alt="logo"
                src="https://i.postimg.cc/q73P7H98/Screenshot-2024-04-22-221304-removebg-preview.png"
                width="70"
                height="50"
                className="d-inline-block align-top"
              />{' '}
              <h2 className='navb' style={{color:"#f3f8ed"}}>RcipeRadar</h2>
            </div>
            <h6 className='mt-2' style={{ color: "#e5efd8" }}>Copyright ©  2024 RecipeRadar All rights reserved.</h6>
          </div>
          </Col>
  
          <Col lg={4} md={4}>
          <div className='mt-2 text-lg-center' style={{ color: "#e5efd8" }}>
            <h5><b>Links</b></h5>
            <Link to={'/'} style={{textDecoration:"none", color:"#e5efd8"}}><h6>Home</h6></Link>
            <Link to={'/'} style={{textDecoration:"none", color:"#e5efd8"}}><h6>About</h6></Link>
            <h6>Recipe</h6>
          </div>
          </Col>
  
          <Col lg={4} md={4}>
          <div className='mt-2' style={{ color: "#e5efd8" }}>
            <h5 className='text-lg-center'><b>Contact Us</b></h5>
              <div className='d-flex gap-3 justify-content-lg-center'>
                <i className="fa-brands fa-2x fa-instagram"></i>
                <i className="fa-brands fa-2x fa-facebook"></i>
                <i className="fa-brands fa-2x fa-x-twitter"></i>
                <i className="fa-brands fa-2x fa-github"></i>
              </div>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
