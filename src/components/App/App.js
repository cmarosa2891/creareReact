import "./App.css";
// import {Button} from "react-bootstrap"; // ojota importa la librearía completa
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  

} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Contacto from "../Contacto/contacto";
import logo from "./logo.png";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../Footer/Footer";
import MyCards from "../MyCards/MyCards";



function App() {
  return (
    <div className="App">
      <header>
        <Navbar bg="light" expand="lg">
          <Container>
            <img className="img" alt="LogoCreare" src={logo} />
            {/* <Navbar.Brand href="#home">Creare</Navbar.Brand> */}
          </Container>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#inicio">Inicio</Nav.Link>
                <Nav.Link href="#servicios">Servicios</Nav.Link>
                <Nav.Link href="#publicaciones">Publicaciones</Nav.Link>
                <Nav.Link href="#contacto">Contacto</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Horarios</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Obras Sociales</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <MyCards />
      <Contacto />

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
