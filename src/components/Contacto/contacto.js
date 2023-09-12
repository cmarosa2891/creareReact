import React from "react";
import "./contacto.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ScheduleCart from "../ScheduleCart/ScheduleCart";

export default function Contacto() {
  return (
    <>
    <Container>
        <form className="formulario" action>
        <h5>Datos para Contacto</h5>
        <h7>
          Dejame tus datos y preferencias y me pondré en contacto a la brevedad
        </h7>
          <Form.Group className="mb-6" controlId="formBasicEmail">
            <Form.Label htmlFor="name">Nombre Completo</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su nombre completo"/>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control type="email" placeholder="Ingrese su email" />
            <Form.Label htmlFor="phone">Teléfono</Form.Label>
            <Form.Control type="phone" placeholder="Ingrese su nro celular" />
          </Form.Group>
          <Form.Group className="mb-3">
          <label htmlFor="consulta">¿Te atendiste previamente conmigo?</label>
          <Col xs>
              <Form.Check
                type="checkbox"
                id="FieldsetCheck"
                label="Primera consulta" />
              <Form.Check
                type="checkbox"
                id="FieldsetCheck"
                label="Realice consultas previas"/>
            </Col>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="motivo">Motivo de Consulta</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Breve descripción del motivo de consulta"
            />

            <ScheduleCart />

            <Form.Label htmlFor="horarios">
              Indicar alternativas para coordinar horarios de consulta
            </Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="" />
            <Form.Text className="text-muted">
              Indicar preferencias de disponibilidad de Lunes a Viernes de 9 a
              21hs
            </Form.Text>
          </Form.Group>
          <Button variant="outline-primary" type="submit">
            Enviar
          </Button>
        </form>
        </Container>
    </>
  );
}
