import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Offcanvas,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import LOGO from '../images/logo.png'
import bg from '../images/bgImage.jpg'
function NavBar() {
  const myStyle={
    width:"150px",
    heigth:"150px"
}
const maStyle={
  fontSize:"12px",
  fontWeight:"bold"
}
  return (
    <div >
      <section style={{width:"70%",marginLeft:"200px",marginTop:"30px",marginBottom:"100px"}}>
      <Navbar expand="lg" variant="light" bg="secondary">
  <Container>
    <Navbar.Brand href="#"> <img  src={LOGO} style={myStyle} alt="logo" /></Navbar.Brand>
  </Container>
  <Navbar.Brand href="#" style={maStyle} class="navB">HOME</Navbar.Brand>
  <Navbar.Brand href="#" style={maStyle} class="navB">ABOUT US</Navbar.Brand>
  <Navbar.Brand href="#" style={maStyle} class="navB">LPG PRODUCTS</Navbar.Brand>
  <Navbar.Brand href="#" style={maStyle} class="navB">SERVICES</Navbar.Brand>
  <Navbar.Brand href="#" style={maStyle} class="navB">DISTRIBUITORS</Navbar.Brand>
  <Navbar.Brand href="#" style={maStyle} class="navB">GALLERY</Navbar.Brand>
  <Navbar.Brand href="#" style={maStyle} class="navB">CONTACT US</Navbar.Brand>
</Navbar>
      </section>
      
      
  </div>
  )
}
export default NavBar