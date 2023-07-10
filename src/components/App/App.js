import "./App.css";
// import {Button} from "react-bootstrap"; // ojota importa la librearía completa
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Row,
  Col,
  Image,
  Button,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Contacto from "../Contacto/contacto";
import logo from "./logo.png";
import ScrollToTop from "react-scroll-to-top";
import EventsList from "../Cards2/EventsList";
import { eventsData } from "../Cards2/data";
import Persons from "../Persons/Persons";
import Footer from "../Footer/Footer";

const Tarjeta = ({ titulo, descripcion }) => {
  return (
    <div>
      <h3>{titulo}</h3>
      <p>{descripcion || 'Artículo en desarrollo'}</p>
    </div>
  );
};

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
      <main>
        <Tarjeta
          titulo="Tarjeta de Prueba"

          descripcion="Componentes en react"
        ></Tarjeta>
        <Tarjeta
          titulo="Tarjeta de Prueba 2"
        ></Tarjeta>
        <Persons />
        <Persons />
        <Persons />

        <Container>
          <Row className="px-4 my-5">
            <Col sm={7}>
              <Image
                src="https://picsum.photos/900/400"
                fluid
                rounded
                className=""
              />
            </Col>
            <Col sm={5}>
              <h1 className="font-weigth-ligth">Tagline</h1>
              <p class="mt-4">lorem</p>
              <Button variant="outline-primary">Call to action</Button>
            </Col>
          </Row>
          <Card className="text-center bg-secondary text-white my-5 py-4">
            <Card.Body>Card Body Text</Card.Body>
          </Card>
          <div className="card-block">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://picsum.photos/320/200" />
              <Card.Body>
                <Card.Title>Card Box</Card.Title>
                <Card.Text>Card Text</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://picsum.photos/320/200" />
              <Card.Body>
                <Card.Title>Card Box</Card.Title>
                <Card.Text>Card Text</Card.Text>
              </Card.Body>
            </Card>

            <EventsList data={eventsData} />
          </div>
        </Container>

      </main>


      <Contacto />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
