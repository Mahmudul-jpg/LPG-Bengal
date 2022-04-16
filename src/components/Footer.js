import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Alert,Container,Row,Col} from 'react-bootstrap'
import LOGO from '../images/logo.png'
import location from '../images/location.png'
 function Footer() {
     const myStyle={
         width:"200px",
         heigth:"200px"
     }
  return (
    <div style={{backgroundColor: "#1e1e1e !important",fontWeight:"bold"}}>
        
        <Container style={{paddingTop:"20px"}} >
  <Row >
    <img  src={LOGO} style={myStyle} alt="logo" />
</Row>
<Row>
    <Col style={{color: "white"}}>
    Corporate Office
    <hr style={{width:"10%"}}/>
    </Col>
    <Col style={{color: "white"}}>
    Quick Links
    <hr style={{width:"10%"}}/>
    </Col>
    <Col style={{color: "white"}}>
    Quick Links
    </Col>
</Row>

<Row>
    <Col><p style={{color: "white",fontSize:'12px'}}>
        <img src={location} />
    Level 7, Richmond Concord Gulshan Ave,<br/> Dhaka 1212.</p></Col>
</Row>
<Row>
    <Col><h6 style={{color: "white",fontSize:'12px'}}>
    +09609-009009</h6></Col>
</Row>
<Row>
    <Col><h6 style={{color: "white",fontSize:'12px'}}>
    info@bengal.com.bd
</h6></Col>
</Row>

</Container>
 

    </div>
  )
}
export default Footer