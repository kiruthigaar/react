import React from 'react'
import { useState ,useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from './Sidebar';
import axios from 'axios';
import {Link} from 'react-router-dom'
import doctor1 from '../images/doctor1.jpg'

const PatientsList = () => {
    const [patients, setPatients] = useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:2000/patient/')
        .then(response => {
            console.log(response)
            setPatients(response.data)
            
        })
        .catch(error => console.log(error))
    },[])

    const handleDeletePatient = (id) => {
        if(confirm("You want to delete the patient!") == true){
            axios.delete(`http://127.0.0.1:2000/patient/${id}`)
            .then(response => {
                const deletedPatient = patients.filter((patient) => patient._id !== id)
                setPatients(deletedPatient)
            })
            .catch(error => console.log(error))
        }
    }
  return (
    <div>
    {/* <Container fluid="md" className='admincontainer'>  */}
    <Row><Col><div className='admin'>KPNR Medical Center and Hospital</div></Col></Row>
          <Row style = {{marginTop : "100px"}}>
             <Row md={4}>
              <Col sm={4}>
                  <Sidebar />
              </Col>
              </Row>
          <Row >
              {patients.map(patient => { return (
                      <Row  className='doctorscard'>
                      <Col sm={4}>
                      <div style={{width: "18rem;"}}>
                      <div className="card-body">
                          <h5 className="card-title">{patient.name}</h5>
                          <p>Gender: <span>{patient.gender}</span></p>
                          <p>Mobile number: <span>{patient.mobile}</span></p>
                          <p>Email: <span>{patient.email}</span></p>
                          <p>Address: <span>{patient.address}</span></p>
                          <p>DOB: <span>{patient.DOB}</span></p>
                          <p>Blood Group: <span>{patient.blood_group}</span></p>
                          <Link to = {`/editdoctor/${patient._id}/`}><a href="#" className="card-link">Edit </a></Link>
                          <a href="#" className="card-link" onClick={() => handleDeletePatient(patient._id)}>Delete </a>
                      </div>
                      </div>
                      </Col>
                      <Col sm={4}>
                      {/* <img class="card-img-top" src={doctor1} alt="Card image cap" style = {{width:"300px",height:"300px", padding:"20px"}} /> */}
                     </Col>
                     </Row>)
                  })} 
      
              
             
             </Row>
             
          </Row>
    {/* </Container> */}
  </div>
  )
}

export default PatientsList
