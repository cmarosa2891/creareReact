
import './App.css';
// import {Button} from "react-bootstrap"; // ojota importa la librearía completa
import { Navbar,Container, Nav, NavDropdown, Row, Col, Image, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Contacto from '../Contacto/contacto';
import logo from './logo.png';


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

    <Container>
      <Row className="px-4 my-5">
        <Col sm={7}>
          <Image src="https://picsum.photos/900/400"
           fluid
           rounded
           className='' />  
        </Col>
        <Col sm={5}>
          <h1 className="font-weigth-ligth">
            Tagline
          </h1>
          <p class="mt-4">
            lorem
          </p>
          <Button variant="outline-primary">Call to action</Button>
        </Col>
      </Row>
  
        <Card className="text-center bg-secondary text-white my-5 py-4">
          <Card.Body>Card Body Text</Card.Body>
        </Card>

          <Card style={{width:"18rem"}}>
            <Card.Img variant="top" src="https://picsum.photos/320/200"/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Card Text</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{width:"18rem"}}>
            <Card.Img variant="top" src="https://picsum.photos/310/200"/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Card Text</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{width:"18rem"}}>
            <Card.Img variant="top" src="https://picsum.photos/340/200"/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Card Text</Card.Text>
            </Card.Body>
          </Card>

    </Container>


      </main>
      <Contacto />
      <footer class="py-5 my-5 bg-dark">
        <Container className="px-4">
          <p class="text-center text-white">
            CopyRigth
          </p>
        </Container>

      </footer>
    </div>
  );
}

export default App;
