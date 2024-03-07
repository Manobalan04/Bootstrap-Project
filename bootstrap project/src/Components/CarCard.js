import React from 'react'
import { Button, Card, Modal } from 'react-bootstrap'

const CarCard = () => {

  const [modalShow, setModalShow] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Assitance!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Car has Booked!</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }


  return (
    <>
      <Card className="m-3" >
        <Card.Img variant="top" src={require('../Media/Car3.jpeg')} />
        <Card.Body>
          <Card.Title>Jeep</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className='text-center'>
            <Button variant="danger" onClick={() => setModalShow(true)}>Book Now</Button>
          </div>
        </Card.Body>
      </Card>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

export default CarCard