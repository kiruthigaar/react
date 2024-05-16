import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import HomeNav from './HomeNav';

// import axios from 'axios';

const PatientDetails = () => {
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
                    <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                        required
                        type="text"
                        placeholder="name"
                        
                        
                    />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Gender"
                        
                    />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Mobile Number"
                       
                    />
                    </Form.Group>
                    </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Email" 
                                              />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Address"
                        
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>DOB</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="DOB"
                       
                        />
                    </Form.Group>
                    
                </Row>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Blood Group</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Blood Group"
                        
                        />
                    </Form.Group>
                    <br></br>
                <Button type="submit">Submit form</Button>
            </Form>
             </Col>
                
             
        </Row>
    </div>
  )
}

export default PatientDetails
