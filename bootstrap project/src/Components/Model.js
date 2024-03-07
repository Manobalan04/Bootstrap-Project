import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CarCard from './CarCard'

const Model = () => {

    let [menu] = useState([1, 2, 3, 4, 5, 6])

    return (
        <section id="model" className='bg-dark opacity-90 pb-5'>
            <Container>
                <div className='text-center pt-5'>
                    <h3 className='text-danger'>Must try all the car</h3>
                </div>
                <Row>
                    {menu.map((e) => {
                        return (
                            <Col md={6} lg={4} key={e} >
                                <CarCard />
                            </Col>);
                    }
                    )}
                </Row>
            </Container>
        </section>
    )
}

export default Model