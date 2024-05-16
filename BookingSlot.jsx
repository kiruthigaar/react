import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeNav from './HomeNav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const BookingSlot = () => {
  return (
    <div>
        <Row style = {{backgroundColor : "#c2d1c6"}}>
            <Col style = {{padding : "30px"}}>
            <h5 style = {{textAlign : "center"}}>KPNR Medical Centre and Hospital</h5>
            </Col>
        </Row>
        <Row>
            <Col>
            <HomeNav />
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col  md="auto" style = {{marginTop : "50px"}}>
                <Form >
                    <Row >
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>Doctor</Form.Label>
                        <Form.Control
                        required
                        type="text"
                        placeholder="name"
                        
                        
                    />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Department</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Gender"
                        
                    />
                    </Form.Group>
                    
                    <Button type="submit">Submit form</Button>
                    </Row>
                </Form>
            </Col>
        </Row>
        {/* <Row>
                <Col>
                <div>
                <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                </div>
                </Col>
                <Col>
                <div>
                <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                </Form.Select>
                </div>
                </Col>
                <Col>
                    <Button disabled = {!selectedDoctor} onClick = {handleSubmit}>Submit</Button>
                </Col>
            </Row> */}
    </div>
  )
}

export default BookingSlot
