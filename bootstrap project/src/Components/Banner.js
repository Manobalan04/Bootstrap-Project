import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
    return (
        <Container className='mt-5'>
            <Row className='justify-content-center'>
                <Col lg={8}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require('../Media/Car1.jpeg')}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Chevrolet</h3>
                                <p className="d-none d-sm-block">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require('../Media/Car2.jpeg')}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>Maserati</h3>
                                <p className="d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require('../Media/Car4.jpeg')}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Bmw</h3>
                                <p className="d-none d-sm-block">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <div className='text-center mt-3'>
                <h2>Cars should ride everyone</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </Container>
    )
}

export default Banner