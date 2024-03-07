import React, { useState } from 'react'
import { Col, Container, Row, Image, Button } from 'react-bootstrap'

import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const MustTry = () => {

  const [show, setShow] = useState(false);

  return (
    <section id='musttry' className='mt-5'>
      <div className='text-center'>
        <h2 className='display-5'>Car of the week!</h2>
      </div>
      <Container className='mt-3 mb-3'>
        <Row className='align-items-center'>
          <Col md={7}>
            <Image src={require("../Media/Car5.jpeg")} fluid={true} alt="car5"></Image>
          </Col>
          <Col md={5}>
            <div className='pt-3'>
              <h2 className='h1'>Mercedes Benz</h2>
              <p className='lead text-muted'>Lorem Ipsum there are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
              <Button variant='danger' onClick={() => setShow(true)}>
                Buy Now
              </Button>
            </div>
          </Col>
        </Row>

        <ToastContainer
          className="position-fixed p-3"
          position={'middle-center'}
          style={{ zIndex: 1 }}
        >
          <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Assitance!</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Hello Buddy! Car added for Booking!. </Toast.Body>
          </Toast>
        </ToastContainer>


      </Container>
    </section>
  )
}

export default MustTry